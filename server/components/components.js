import { ComponentLoader } from 'adminjs'
import path from 'path'

const componentLoader = new ComponentLoader()

const Components = {
    GroupedQuestionsPage: componentLoader.add('GroupedQuestionsPage', path.resolve('./components/GroupedQuestionsPage.jsx')),
    DepartmentMultiSelect: componentLoader.add('DepartmentMultiSelect', path.resolve('./components/DepartmentMultiSelect.jsx')),
    SwitchViewQuestionAction: componentLoader.add('SwitchViewQuestionAction', path.resolve('./components/SwitchViewQuestionAction.jsx')),
    TopicConfig: componentLoader.add('TopicConfig', path.resolve('./components/TopicConfig.jsx')),
}

export { componentLoader, Components }