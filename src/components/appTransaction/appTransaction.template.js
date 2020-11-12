export default () => /*html*/ `
    <div class="transaction-wrapper">
        <div class="transaction-form">
            <h1 class="title">Nova Transação</h1>
            <app-select data-props="{'id': 'transaction', 'label':'Tipo de transação'}"></app-select>
            <app-input data-props="{'id': 'product', 'label':'Nome da mercadoria', 'placeholder':'Mercadoria xxx...'}"></app-input>
            <app-input data-props="{'id': 'price', 'label':'Valor', 'placeholder':'R$ 0,00'}"></app-input>
            <app-button data-props="{'id': 'addTransaction', 'label':'Adicionar transação'}"></app-button>
        </div>
        <div class="transaction-extract">
            <h1 class="title">Extrato de transações</h1>
            <app-extract></app-extract>
        </div>
    </div>
`