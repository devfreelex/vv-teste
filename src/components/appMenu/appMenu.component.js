import template from './appMenu.template'
import styles from './appMenu.styles'

export default () => {

    const tagName = 'app-menu'

    const state = {
        isVisible: false
    }

    const events = ({query, queryAll, on, methods}) => ({
        onClickToShow () {
            const menuButton = query('.menu-icon')
            on('click', [menuButton], methods.showMenu)
        },

        onClickToHide () {
            const closeButton = query('.close-icon')
            on('click', [closeButton], methods.hideMenu)
        },
        
        onClickItem () {
            const linkItem = queryAll('.menu-item')
            on('click', linkItem, (e) => {
                e.preventDefault()
                methods.hideMenu()
                methods.redirect(e)
            })            
        }
    })

    const methods = ({props, state}) => {

        const showMenu = () => {
            state.set({isVisible: true})
        }

        const hideMenu = () => {
            state.set({isVisible: false})
        }   
        
        const redirect = ({target}) => {
            const href = target.getAttribute('href')
            window.location.hash = href
        }

        return {
            showMenu,
            hideMenu,
            redirect
        }
    }

    return {
        state,
        tagName,
        template,
        styles,
        methods,
        events
    }
}