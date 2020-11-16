export default () => /*css*/ `
    app-extract,
    app-extract .extract-wrapper,
    app-extract .header,
    app-extract .content,
    app-extract .note {
        display:block;
        float:left;
        width:100%;
    }

    app-extract .header {
        border-bottom: 1px #ccc solid;
    }

    app-extract .header-item,
    app-extract .content-item,
    app-extract .footer-item {
        display:block;
        float:left;
        width:calc(100% - 120px);
        padding:15px;
        text-align:left;
    }
 
    
    app-extract .header-item + .header-item,
    app-extract .content-item + .content-item,
    app-extract .footer-item + .footer-item {
        width:120px;
        text-align: right
    }   
    
    app-extract .content{
        border-bottom:1px #ebebeb solid;
    }


    app-extract .header-item,
    app-extract .footer-item {
        font-weight: bold
    }

    app-extract .note {
        text-align:right;
        padding-right:15px;
        font-size: .875em;
        color:#666;
        position:relative;
        top: -15px;
    }
    
    app-extract .text-red { color: red }
    app-extract .text-green { color: green }
`