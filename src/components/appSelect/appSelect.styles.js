export default () => /*css*/ `
    app-select,
    app-select .input-wrapper,
    app-select span,
    app-select label,
    app-select select,
    app-select option {
        display:block;
        float:left;
        width:100%;
    }
    
    app-select span {
        font-size: .875em;
        padding-left:3px;
        padding-bottom:5px;
        color:#666;
    }

    app-select label {
        padding:15px 0;
    }

    app-select select {
        font-size: .875em;
        text-transform: uppercase;
        padding:15px;
        border:1px #ebebeb solid;
        border-radius:3px;
        color:#666;
        background:#fff;
    }

    app-select option {
        padding:15px;
    }

    app-select input:hover,
    app-select input:focus {
        border:1px #ddd solid;
    }
`