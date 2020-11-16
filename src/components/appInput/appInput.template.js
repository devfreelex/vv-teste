export default ({ props, state }) => /*html*/ `
    <div class="input-wrapper">
        <label>
            <span>${props.object.label}</span>
            <input 
                id="${props.object.id}"
                type="text" 
                value="${ state.value || '' }"
                placeholder="${props.object?.placeholder || ''}"
            >
        </label>
    </div>
`