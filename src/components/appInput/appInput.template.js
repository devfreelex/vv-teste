export default ({props, state}) => /*html*/ `
    <div class="input-wrapper">
        <label>
            <span>${props.object.label}</span>
            <input type="text" placeholder="${props.object?.placeholder || ''}">
        </label>
    </div>
`