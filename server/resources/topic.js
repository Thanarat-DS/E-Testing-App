import { Topic } from '../model.js';
import { Components } from '../components/components.js';

export const topicResource = {
  resource: Topic,
  options: {
    navigation: { name: 'เมนู' },
    id: 'ตั้งค่า',
    properties: {
      topic_code: { isRequired: true },
    },
    listProperties: ['topic_code', 'topic_title'],
    editProperties: ['topic_code', 'topic_title'],
  },
};
