import template from './appButton.template'
import styles from './appButton.styles'
import { store } from '../../store'

import { formatBrl } from '../../utils/formatMoney.directive'

export default () => {

    const tagName = 'app-button'

    const state = {
        isValid: false
    }

    const hooks = ({methods}) => ({

        beforeOnInit () {

            store.subscribe( dataStore => {
                methods.clearTransaction(dataStore)
                methods.isValidInput(dataStore)
            })
        }

    })

    const events = ({query, on, methods}) => ({
        onClick () {
            const button = query('button')
            on('click', [button], methods.addTransaction)
        }
    })


    const methods = ({props, state}) => {

        const _existsAndIsNotEmpty = (prop, object) => {
           return object.hasOwnProperty(prop) && 
            object[prop] !== '' &&  
            object[prop] !== null && 
            object[prop] !== 'undefined'

        }

        const addTransaction = () => {
            const { currentTransaction } = store.get()
            
            store.update( dataStore => {
                const transaction = JSON.stringify({
                    type:currentTransaction.type,
                    product:currentTransaction.product,
                    price: formatBrl(currentTransaction.price),
                })

                dataStore.transactions = [...dataStore.transactions, JSON.parse(transaction)]
                dataStore.currentTransaction = {type: 'purchase'}
                dataStore.activeInput = 'product'
            })
        }

        const clearTransaction = () => {
            state.set({ currentTransaction: {type: 'purchase'}})
        }

        const isValidInput = (dataStore) => {
            const { currentTransaction: transaction } = dataStore
            const propTypeIsValid = _existsAndIsNotEmpty('type', transaction)
            const propProductIsValid = _existsAndIsNotEmpty('product', transaction)
            const propPriceIsValid = _existsAndIsNotEmpty('price', transaction)

            const isValidInputs = propTypeIsValid && propProductIsValid && propPriceIsValid
            state.set({ isValid: isValidInputs })

        }



        return {
            addTransaction,
            clearTransaction,
            isValidInput,
        }
    }

    return {
        state,
        tagName,
        template,
        styles,
        events,
        hooks,
        methods
    }
}