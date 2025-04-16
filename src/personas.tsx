import { PersonaOptions } from '@nlux/react';

const assistantAvatar = '../../public/assistant.png';
const userAvatar = '../../public/user.png';

export const personas: PersonaOptions = {
    assistant: {
        name: 'Qwen2.5',
        avatar: assistantAvatar,
        tagline: 'Developed based on NLUX React Ollama environment.',
    },
    user: {
        name: 'Surname',
        avatar: userAvatar,
    }
};
