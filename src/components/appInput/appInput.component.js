import template from './appInput.template'
import styles from './appInput.styles'

import { store } from '../../store'

export default () => {
    const tagName = 'app-input'

    const state = store.get()

    const hooks = ({methods}) => ({
        beforeOnInit () {
            store.subscribe(methods.updateState)
        }
    })

    const events = ({query, on, methods}) => ({
        onChange () {
            const input = query('input')
            on('keyup', [input], ({target}) => {
                methods.setValue(target)

                setTimeout(() => {
                    methods.focusInput(query)
                }, 100)
            })
        }
    })

    const methods = ({props, state}) => {

        const setValue = ({value, id}) => {
            store.update((dataStore) => {
                dataStore.currentTransaction[id] = value
            })

        }

        const updateState = ({currentTransaction}) => {
            state.set({currentTransaction})     
        }

        const focusInput = (query) => {
            const input = query('input')
            input.focus();
            const length = input.textContent.length
            input.setSelectionRange(2, 5);           

        }

        return {
            setValue,
            updateState,
            focusInput
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