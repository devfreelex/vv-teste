import { storeFactory } from 'r9x_js'

const store = storeFactory({
    transactions:[
        {
            type:'purchase',
            product:'Material para escritório',
            price:'100.00'
        },
        {
            type:'sale',
            product:'Computador',
            price:'200.00'
        }
    ],
    currentTransaction: {type:'purchase'},
    activeInput: null
})

export { store }