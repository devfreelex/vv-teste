import template from './appTransaction.template'
import styles from './appTransaction.styles'

import appInput from '../appInput/appInput.component'
import appSelect from '../appSelect/appSelect.component'
import appExtract from '../appExtract/appExtract.component'
import appButton from '../appButton/appButton.component'

export default () => {
    const tagName = 'app-transaction'

    const children = () => ({
        appInput,
        appSelect,
        appExtract,
        appButton
    })


    return {
        tagName,
        styles,
        template,
        children
    }
}