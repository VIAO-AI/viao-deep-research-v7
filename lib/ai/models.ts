import { MistralClient } from '@mistralai/mistralai';
import { env } from '@/lib/env';

export const DEFAULT_CHAT_MODEL: string = 'chat-model';

interface ChatModel {
  id: string;
  name: string;
  description: string;
}

const mistralClient = new MistralClient(env.MISTRALAI_API_KEY);

export const chatModels: Array<ChatModel> = [
  {
    id: 'chat-model',
    name: 'Chat model',
    description: 'Primary model for all-purpose chat',
  },
  {
    id: 'chat-model-reasoning',
    name: 'Reasoning model',
    description: 'Uses advanced reasoning',
  },
];

export const chatModel = {
  model: 'mistral-7b',
  temperature: 0.7,
  maxTokens: 1000,
  doGenerate: async ({ prompt }) => ({
    rawPrompt: prompt,
    rawSettings: {
      batchSize: 32,
      learningRate: 3e-5
    },
    text: await mistralClient.chat({
      model: 'mistral-7b',
      messages: [{ role: 'user', content: prompt }]
    })
  })
};
