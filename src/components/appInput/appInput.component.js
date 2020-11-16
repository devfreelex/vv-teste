import template from './appInput.template'
import styles from './appInput.styles'

import { store } from '../../store'
import { formatBrl } from '../../utils/formatMoney.directive'

export default () => {
    const tagName = 'app-input'

    const state = {
        value:''
    }

    const hooks = ({methods}) => ({
        beforeOnInit () {
            store.subscribe(dataStore => {
                methods.updateState(dataStore)
                methods.focusInput(dataStore)
            })
        }
    })

    const events = ({query, on, methods}) => ({
        onKeyUp () {
            const input = query('input')
            on('keyup', [input], ({target}) => {
                const {value, id} = target
                methods.updateStore({value, id})
            })
        }
    })

    const methods = ({props, state, elm }) => {

        const _formatMoney = (value) => {
             return formatBrl(value)  
        }

        const updateStore = ({value, id}) => {
            store.update( dataStore => {

               if(id !== 'price') {
                   dataStore.currentTransaction[id] = value
                   dataStore.activeInput = id
                   return
               }

               dataStore.currentTransaction[id] = _formatMoney(value)
               dataStore.activeInput = id
            })
        }

        const updateState = (dataStore) => {
            const { object: dataProps } = props.get()
            const { currentTransaction } = dataStore
            const { product, price } = currentTransaction

            if(!product && !price) return state.set({value:''})
            if(dataProps.id === 'product')  return state.set({value: product})
            if(dataProps.id === 'price')  return state.set({value: price})

        }


        const focusInput = ({activeInput}) => {
            
            const input = elm.querySelector(`#${activeInput}`)

            if(!input) return
            input.focus();
            const position = input.value.length
            input.setSelectionRange(position, position);           

        }
        


        return {
            focusInput,
            updateStore,
            updateState
        }
    }

    return {
        state,
        tagName,
        template,
        styles,
        methods,
        events,
        hooks
    }
}