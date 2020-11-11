const logoWidth = '150px'
const logoGutter = '15px'
const logoAndMenuHeight = '75px'

export default () => /*css*/ `
    app-header,
    app-header .header-wrapper,
    app-header .header-logo-wrapper,
    app-header .header-menu-wrapper {
        display:block;
        float:left;
    }

    app-header,
    app-header .header-wrapper {
        width:100%;
        background:#ebebeb;
    }

    app-header .header-logo-wrapper, 
    app-header .header-menu-wrapper {
        height:${logoAndMenuHeight}
    }

    app-header .header-logo-wrapper {
        width:${logoWidth};
        margin-left:${logoGutter};
        background:#ccc;
    }

    app-header .header-menu-wrapper {
        width:calc(100% - ${logoWidth} - ${logoGutter});
        padding:15px;
        text-align:right;
    }



`