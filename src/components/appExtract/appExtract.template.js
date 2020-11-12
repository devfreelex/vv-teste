const transactionFragment = (transaction) => /*html*/ `
        <div class="content">
            <div class="content-item">
                <span>
                    ${transaction.type === 'compra' ? '-' : '+'}
                </span>
                ${transaction.product}
            </div>
            <div class="content-item">${transaction.price}</div>
        </div>
`

export default ({props, state, methods}) => {

    return /*html*/`
    <div class="extract-wrapper">
        <div class="header">
            <div class="header-item">Mercadoria</div>
            <div class="header-item">Valor</div>
        </div>

        ${
            state.transactions.map( transaction => {
                return transactionFragment(transaction)
            }).join('')
        }


        <div class="footer">
            <div class="footer-item">Total</div>
            <div class="footer-item">${methods.getTotal()}</div>
        </div>
        <div class="note">[lucro]</div>
    </div>
`
}