export default ({props, state}) => {

    const { currentTransaction: transaction} = state

    return /*html*/ `
    <div class="input-wrapper">
        <label>
            <span>${props.object.label}</span>
            <select id="${props.object.id}">

                <option 
                    value="purchase"
                    ${transaction.type === 'purchase' ? 'selected' : ''}
                >
                    Compra
                </option>

                <option 
                    value="sale"
                    ${transaction.type === 'sale' ? 'selected' : ''}
                >
                    Venda
                </option>

            </select>
        </label>
    </div>
`
}