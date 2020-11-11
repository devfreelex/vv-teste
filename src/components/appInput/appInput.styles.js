export default () => /*css*/ `
    app-input,
    app-input .input-wrapper,
    app-input span,
    app-input label,
    app-input input {
        display:block;
        float:left;
        width:100%;
    }
    
    app-input span {
        font-size: .875em;
        padding-left:3px;
        padding-bottom:5px;
        color:#666;
    }

    app-input label {
        padding:15px 0;
    }

    app-input input {
        font-size: .875em;
        text-transform: uppercase;
        padding:15px;
        border:1px #ebebeb solid;
        border-radius:3px;
        color:#666;
        background:#fff;
    }

    app-input input:hover,
    app-input input:focus {
        border:1px #ddd solid;
    }
`