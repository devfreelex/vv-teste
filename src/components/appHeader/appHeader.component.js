import template from './appHeader.template'
import styles from './appHeader.styles'

import appMenu from '../appMenu/appMenu.component'

export default () => {

    const tagName = 'app-header'

    const children = () => ({
        appMenu
    })

    return {
        tagName,
        template,
        styles,
        children
    }
}