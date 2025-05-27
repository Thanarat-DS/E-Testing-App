import { User } from '../model.js';
import bcrypt from 'bcrypt';

export const userResource = {
  resource: User,
  options: {
    navigation: { name: 'เมนู' },
    id: 'ผู้ใช้งาน',
    actions: {
        new: {
          before: async (request) => {
            if (request.payload && !request.payload.password) {
              const hashedPassword = await bcrypt.hash('Etest@1234', 10);
              request.payload.password = hashedPassword;
            }
            return request;
          },
        },
      },
    properties: {
      password: {
        isDisabled: true,
      },
      created_at: {
        isDisabled: true,
        isVisible: { list: true, edit: false, filter: true, show: true },
      },
      Level: {
        availableValues: [
          { value: 'Employee', label: 'Employee' },
          { value: 'Manager', label: 'Manager' },
        ],
      },
    },
    listProperties: ['employeeID', 'username', 'email', 'Department', 'JobTitle', 'Site', 'Level', 'manager', 'email_manager', 'created_at'],
    showProperties: ['employeeID', 'username', 'email', 'Department', 'JobTitle', 'Site', 'Level', 'manager', 'email_manager', 'created_at'],
  },
};
