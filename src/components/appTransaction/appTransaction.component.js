import template from './appTransaction.template'
import styles from './appTransaction.styles'

import appInput from '../appInput/appInput.component'
import appSelect from '../appSelect/appSelect.component'
import appExtract from '../appExtract/appExtract.component'

export default () => {
    const tagName = 'app-transaction'

    const children = () => ({
        appInput,
        appSelect,
        appExtract
    })

    return {
        tagName,
        styles,
        template,
        children
    }
}