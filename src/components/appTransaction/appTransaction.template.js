export default () => /*html*/ `
    <div class="transaction-wrapper">
        <div class="transaction-form">
            <h1 class="title">Nova Transação</h1>
            <app-select data-props="{'label':'Tipo de transação'}"></app-select>
            <app-input data-props="{'label':'Nome da mercadoria', 'placeholder':'Mercadoria xxx...'}"></app-input>
            <app-input data-props="{'label':'Valor', 'placeholder':'R$ 0,00'}"></app-input>
            <app-button data-props="{'label':'Adicionar transação'}"></app-button>
        </div>
        <div class="transaction-extract">
            <h1 class="title">Extrato de transações</h1>
            <app-extract></app-extract>
        </div>
    </div>
`