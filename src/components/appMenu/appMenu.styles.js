export default () => /*css*/ `

    app-menu,
    app-menu .menu-wrapper {
        display:inline-block;
    }

    app-menu .menu-item {
        display:block;
        float:left;
        padding:15px;
        margin-left:15px;
        text-decoration:none;
        color:#666;
        text-align:center;
        background:#fff
    }

    app-menu .menu-icon {
        display: none;
        position: absolute;
        top: 15px;
        right: 15px;
        padding: 7.5px;
        background: #000; 
        color: #fff;
        border-radius:3px;
        font-size: 1.2em;
        cursor: pointer;
    }

    app-menu .menu-icon:hover {
        background:#202020
    }

    app-menu .close-icon {
        display:none;
    }

    @media all and (max-width:1180px) {
        app-menu .menu-icon {
            display:block;
        }

        app-menu .menu-links {
            position:fixed;
            top:0;
            bottom:0;
            right:-100%;
            width:calc(100% - 45px);
            max-width:320px;
            height:100%;
            background:#232324;
            transition: right .3s all;
            z-index:100
        }

        app-menu .menu-links.show {
            right:0;
        }

        app-menu .menu-item {
            width:100%;
            color:#fff;
            background:none;
            text-align:right;
            margin:0;
        }

        app-menu .menu-item:hover {
            background: #ccc;
            color:#666
        }

        app-menu .close-icon {
            display:block;
            float:left;
            color:#f9f9f9;
            font-size: 1.2em;
            padding:15px;
            cursor: pointer;
        }
    }    

`