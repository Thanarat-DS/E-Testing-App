import { Score } from '../model.js';

export const scoreResource = {
  resource: Score,
  options: {
    navigation: { name: 'เมนู' },
    id: 'รายงาน & ประวัติฯ',
    properties: {
      user_id: { reference: 'ผู้ใช้งาน' },
      topic_code: { reference: 'ตั้งค่า' },
    },
  },
};
