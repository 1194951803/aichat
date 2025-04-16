import { ChatAdapterExtras, StreamSend, StreamingAdapterObserver } from '@nlux/react';

const demoProxyServerUrl = 'http://localhost:11434/api/chat';

export const send: StreamSend = async (
    prompt: string,
    observer: StreamingAdapterObserver,
    extras: ChatAdapterExtras<string>,
) => {
    const body = {
        model: 'qwen2.5:7b',
        messages: [
            ...(extras.conversationHistory?.map(msg => ({
                role: msg.role,
                content: msg.role === 'assistant' 
                    ? Array.isArray(msg.message)  // 新增数组判断
                        ? msg.message.join('')    // 合并字符数组
                        : msg.message
                    : msg.message                // user/system保持原样
            })) || []),
            {role: 'user', content: prompt}
        ]
    };
    const response = await fetch(demoProxyServerUrl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body),
    });

    if (response.status !== 200) {
        observer.error(new Error('Failed to connect to the server'));
        return;
    }

    if (!response.body) {
        return;
    }

    // Read a stream of server-sent events
    // and feed them to the observer as they are being generated
    const reader = response.body.getReader();
    const textDecoder = new TextDecoder();

    let buffer = '';
    while (true) {
        const {value, done} = await reader.read();
        if (done) break;
        
        buffer += textDecoder.decode(value);
        const lines = buffer.split('\n');
        
        // 保留最后一行不完整数据
        buffer = lines.pop() || '';
        
        for (const line of lines) {
            try {
                const trimmedLine = line.trim();
                if (!trimmedLine) continue;
                
                const parsed = JSON.parse(trimmedLine);
                if (parsed.message?.content) {
                    observer.next(parsed.message.content);
                }
            } catch (e) {
                console.error('解析失败:', e.message, '内容:', line);
            }
        }
    }

    // 处理最后剩余数据
    if (buffer.trim()) {
        try {
            const parsed = JSON.parse(buffer.trim());
            if (parsed.message?.content) {
                observer.next(parsed.message.content);
            }
        } catch (e) {
            console.error('最终数据解析失败:', e.message);
        }
    }
    observer.complete();
};