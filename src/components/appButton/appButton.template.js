export default ({props, state}) => {

    return /*html*/ `
    <div class="btn-wrapper">
        <button 
            ${!state.isValid ? 'disabled' : ''}
            id="${props.object.id}"
        >
            ${props.object.label}
        </button>
    </div>
`
}