import { Department } from '../model.js';

export const departmentResource = {
  resource: Department,
  options: {
    navigation: { name: 'เมนู' },
    id: 'แผนก',
    properties: {
      dept_code: {
        position: 1,
        label: 'Department_ID',
        isVisible: { list: true, edit: false, filter: true, show: true },
        isDisabled: true,
      },
      dept_name: {
        position: 2,
        label: 'Department Name',
        isRequired: true,
      },
    },
    listProperties: ['dept_id', 'company_name', 'dept_name', 'site'],
    editProperties: ['company_name', 'dept_name', 'site'],
    sort: {
      sortBy: 'dept_id',
      direction: 'asc',
    },
  },
};
