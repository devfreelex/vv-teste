import template from './appSelect.template'
import styles from './appSelect.styles'
import { store } from '../../store'

export default () => {
    const tagName = 'app-select'

    const state = store.get()

    const hooks = ({methods}) => ({
        beforeOnInit () {
            // store.subscribe(methods.updateState)
        }
    })

    const events = ({query, on, methods}) => ({

        onChange () {
            const select = query('select')
            on('change', [select], ({target}) => {
                const { value, id } = target
                 methods.setTransactionType({value, id})
            })
        }

    })

    const methods = ({props, state}) => {

        const setTransactionType = ({value, id}) => {
                store.update( dataStore => {
                    const currentTransaction = { [id]: value }
                    store.update(dataStore => {
                        dataStore.currentTransaction = currentTransaction
                    })
                })
            }

            const updateState = ({currentTransaction}) => {
                const { type } = currentTransaction
                state.set({ currentTransaction })
            }

        return {
            setTransactionType,
            updateState
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