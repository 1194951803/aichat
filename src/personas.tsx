import { PersonaOptions } from '@nlux/react';

const assistantAvatar = 'https://docs.nlkit.com/nlux/images/personas/hawking.png';
const userAvatar = 'https://docs.nlkit.com/nlux/images/personas/marissa.png';

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
