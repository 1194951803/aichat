# AIChat - 智能对话应用

基于NLUX框架构建的React聊天应用，支持流式响应和对话历史管理。

## 技术栈
- **前端框架**: React 18 + TypeScript
- **UI库**: [@nlux/react](https://react.nlkit.com) 2.13.2
- **构建工具**: Vite 5
- **样式方案**: Nova主题 + CSS Modules
- **HTTP库**: Fetch API
- **状态管理**: React Hooks

## 核心功能
✅ 实时流式对话交互  
✅ 完整的对话历史管理  
✅ 亮色/暗色主题切换  
✅ 自定义AI人物角色  
✅ 异常处理和错误日志

## 项目结构
```bash
hjchat/
├── public/                  # 静态资源
├── src/
│   ├── app.tsx              # 主入口组件
│   ├── main.tsx             # React根组件
│   ├── send.tsx             # 聊天API适配器
│   ├── personas.tsx         # 人物角色配置
│   ├── index.css            # 全局样式
│   └── index.html           # 应用入口
├── vite.config.js           # 构建配置
└── package.json

```
## 安装与运行
```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 生产构建
npm run build
```