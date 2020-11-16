export default ({props, state}) => /*html*/ `
    <div class="menu-wrapper ">
        <i class="las la-bars menu-icon"></i>
        <div class="menu-links ${state.isVisible ? 'show' : ''}">
            <i class="las la-times close-icon"></i>
            <a href="#/" class="menu-item">Dashboard</a>
            <a href="#/" class="menu-item">Resumo</a>
            <a href="#/" class="menu-item">Configurações</a>        
        </div>
    </div>
`