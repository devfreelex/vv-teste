export default () => /*css*/ `
    app-transaction,
    app-transaction .transaction-wrapper {
        display:block;
        float:left;
        width:100%;
    }

    app-transaction .transaction-wrapper  {
        padding:15px;
    }

    app-transaction .title {
        display:block;
        float:left;
        width:100%;
        padding:15px;
        font-size:1em;
        text-align:center;
        color:red
    }

    app-transaction .transaction-form,
    app-transaction .transaction-extract {
        display:block;
        float:left;
        width:calc(100% - 15px);
        border:1px #ccc solid;
        border-radius:3px;   
        padding:15px;     
    }

    app-transaction .transaction-form {
        max-width:472.5px;
        margin-right:7.5px;
    }
    app-transaction .transaction-extract {
        max-width: calc(100% - 487.5px);
        margin-left:7.5px;
    }
`