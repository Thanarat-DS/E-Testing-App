import { Question } from '../model.js';
import { Components } from '../components/components.js';

export const questionResource = {
  resource: Question,
  options: {
    navigation: { name: 'เมนู' },
    id: 'ข้อสอบ',
    properties: {
      question_id: {
        isVisible: { list: true, edit: false, filter: true, show: true },
        isDisabled: true,
      },
      topic_code: {
        reference: 'ตั้งค่า',
        isRequired: true,
      },
      question_text: {
        type: 'textarea',
        // custom components example
        // components: {
        //   edit: Components.QuestionGroup,
        // }
      },
      correct_choice: {
        availableValues: [
          { value: '1', label: 'Choice 1' },
          { value: '2', label: 'Choice 2' },
          { value: '3', label: 'Choice 3' },
          { value: '4', label: 'Choice 4' },
        ],
      },
    },
    listProperties: ['topic_code', 'question_text', 'choice1', 'choice2', 'choice3', 'choice4', 'correct_choice'],
    editProperties: ['topic_code', 'question_text', 'choice1', 'choice2', 'choice3', 'choice4', 'correct_choice'],
    sort: {
      sortBy: 'question_id',
      direction: 'asc',
    },
  },
  actions: {
    SwitchViewQuestionAction: {
        actionType: 'resource',
        icon: 'View',
        label: 'Grouped Questions',
        component: Components.SwitchViewQuestionAction,
    },
  },
};
