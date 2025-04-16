import React from 'react';
import { AiChat, useAsStreamAdapter, useAiChatApi } from '@nlux/react';
import '@nlux/themes/nova.css';

import { send } from './send';
import { personas } from './personas';

const App = ({ colorMode }: { colorMode: 'dark' | 'light' }) => {
    const adapter = useAsStreamAdapter(send, []);
    const aiChatApi = useAiChatApi();
    return (
        <AiChat
            api={aiChatApi}
            adapter={adapter}
            personaOptions={personas}
            displayOptions={{ colorScheme: colorMode, width: 600, height: 600 }}
            conversationOptions={{ historyPayloadSize: 'max' }}
            // initialConversation={[
            //     { role: 'user', message: '我叫小新,你叫阿呆,我们是好朋友,当前的设定是蜡笔小新的世界观' },
            // ]}
        />
    );
};

export default App;
