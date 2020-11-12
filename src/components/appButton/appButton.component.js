import template from './appButton.template'
import styles from './appButton.styles'
import { store } from '../../store'

export default () => {

    const tagName = 'app-button'

    const hooks = ({methods}) => ({

        beforeOnInit () {
            store.subscribe(methods.clearTransaction)
        }

    })

    const events = ({query, on, methods}) => ({
        onClick () {
            const button = query('button')
            on('click', [button], methods.addTransaction)
        }
    })


    const methods = ({props, state}) => {

        const addTransaction = () => {
            const { currentTransaction } = store.get()
            
            store.update( dataStore => {
                const transaction = JSON.stringify(currentTransaction)
                dataStore.transactions = [...dataStore.transactions, JSON.parse(transaction)]
            })
        }

        const clearTransaction = () => {
            state.set({ currentTransaction: {}})
        }


        return {
            addTransaction,
            clearTransaction
        }
    }

    return {
        tagName,
        template,
        styles,
        events,
        hooks,
        methods
    }
}