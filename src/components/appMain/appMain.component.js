import template from './appMain.template'
import styles from './appMain.styles'

import appHeader from '../appHeader/appHeader.component'

export default () => {

    const tagName = 'app-main'

    const children = () => ({
        appHeader
    })

    return {
        tagName,
        template,
        styles,
        children,
    }

}