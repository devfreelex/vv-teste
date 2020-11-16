export default () => /*css*/ `
    app-button,
    app-button .btn-wrapper,
    app-button button {
        display:block;
        float:left;
        width:100%
    }

    app-button button:disabled {
        background:#ccc
    }

    app-button button {
        padding:15px;
        margin-top:15px;
        border-radius:3px;
        border:none;
        color:#fff;
        background:#000;
        text-align:center;
        font-weight: normal;
        font-size: 1em
    }
`