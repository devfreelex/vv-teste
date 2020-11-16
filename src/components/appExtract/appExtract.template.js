const transactionFragment = (transaction, methods) => /*html*/ `
        <div class="content">
            <div class="content-item">
                <span>
                    ${transaction.type === 'purchase' ? '-' : '+'}
                </span>
                ${transaction.product}
            </div>
            <div class="content-item">${methods.formatMoney(transaction.price)}</div>
        </div>
`

export default ({props, state, methods}) => {
    const total = state.total
    const totalBrl = methods.formatMoney(state.total)
    const resultTotal = +total < 0 ? `-${totalBrl}` : totalBrl

    return /*html*/`
    <div class="extract-wrapper">
        <div class="header">
            <div class="header-item">Mercadoria</div>
            <div class="header-item">Valor</div>
        </div>

        ${
            state.transactions.map( transaction => {
                return transactionFragment(transaction, methods)
            }).join('')
        }


        <div class="footer">
            <div class="footer-item">Total</div>
            <div class="footer-item ${+total < 0 ? `text-red` : 'text-green'}">${resultTotal}</div>
        </div>
        <div class="note">[${+total < 0 ? `deficit` : 'lucro'}]</div>
    </div>
`
}