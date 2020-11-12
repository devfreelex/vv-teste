import { storeFactory } from 'r9x_js'

const store = storeFactory({
    transactions:[
        {
            type:'purchase',
            product:'Material para escritório',
            price:99.55
        },
        {
            type:'sale',
            product:'Computador',
            price:1000
        }
    ],
    currentTransaction: {}  
})

export { store }