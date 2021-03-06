import template from './appExtract.template'
import styles from './appExtract.styles'

import { store } from '../../store'
import { formatBrl, formatNumber } from '../../utils/formatMoney.directive'

export default () => {

    const tagName = 'app-extract'

    const state = {
        ...store.get(),
        total: 0
    }

    const hooks = ({state, methods}) => ({
        beforeOnInit () {
            store.subscribe(methods.updateTransactionList)
            state.set({ total: methods.getTotal()})
        }
    })

    const methods = ({props, state}) => {

        const _calculateTransactionByType = (type, transactions) => {

            const transactionList = transactions.filter( transaction => transaction.type === type)

            const result = transactionList.reduce((accumulator, transaction) => {
                return +accumulator + formatNumber(transaction.price)
            }, 0)  

            return result

        }

        const getTotal = () => {
            const { transactions } = store.get()

            const initialValue = 0
            const purchaseTotal = _calculateTransactionByType('purchase', transactions) || initialValue
            const saleTotal = _calculateTransactionByType('sale', transactions) || initialValue
            return saleTotal - purchaseTotal
            
        }

        const updateTransactionList = ({transactions}) => {
            const total = getTotal()
            state.set({transactions, total})
        }

        const formatMoney = (value) => {
            return formatBrl(value)
          
        }

        return {
            getTotal,
            updateTransactionList,
            formatMoney
        }
    }


    return {
        state,
        tagName,
        template,
        styles,
        methods,
        hooks
    }

}