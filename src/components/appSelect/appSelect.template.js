export default ({props, state}) => /*html*/ `
    <div class="input-wrapper">
        <label>
            <span>${props.object.label}</span>
            <select id="${props.object.id}">
                <option value="1" selected>Compra</option>
                <option value="2">Venda</option>
            </select>
        </label>
    </div>
`