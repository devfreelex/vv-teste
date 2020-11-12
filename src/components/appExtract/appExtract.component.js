import template from './appExtract.template'
import styles from './appExtract.styles'

import { store } from '../../store'

export default () => {

    const tagName = 'app-extract'

    const state = store.get()

    const methods = ({props, state}) => {

        const _calculateTransactionByType = (type, transactions) => {

            const transactionList = transactions.filter( transaction => transaction.type === type)

            const result = transactionList.reduce((accumulator, transaction) => {
                return accumulator + transaction.price
            }, 0)  


            if((typeof result) !== 'number') return 0
            return result
            
        }

        const getTotal = () => {
            const { transactions } = state.get()
            const initialValue = 0

            const purchaseTotal = _calculateTransactionByType('purchase', transactions) || initialValue
            const saleTotal = _calculateTransactionByType('sale', transactions) || initialValue
            
            return saleTotal - purchaseTotal
        }

        return {
            getTotal
        }
    }


    return {
        state,
        tagName,
        template,
        styles,
        methods
    }

}