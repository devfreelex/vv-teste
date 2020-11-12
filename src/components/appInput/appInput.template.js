export default ({props, state}) => /*html*/ `
    <div class="input-wrapper">
        <label>
            <span>${props.object.label}</span>
            <input 
                id="${props.object.id}"
                type="text" 
                value="${state.currentTransaction[props.object.id] || ''}"
                placeholder="${props.object?.placeholder || ''}"
            >
        </label>
    </div>
`