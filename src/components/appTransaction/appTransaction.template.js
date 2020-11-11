export default () => /*html*/ `
    <div class="transaction-wrapper">
        <div class="transaction-form">
            <h1 class="title">Nova Transação</h1>
            <app-select data-props="{'label':'Tipo de transação'}"></app-select>
            <app-input data-props="{'label':'Nome da mercadoria'}"></app-input>
            <app-input data-props="{'label':'Valor'}"></app-input>
            <app-button data-props="{'label':'Adicionar transação'}"></app-button>
        </div>
        <div class="transaction-extract">
            <h1 class="title">Nova Transação</h1>
        
        </div>
    </div>
`