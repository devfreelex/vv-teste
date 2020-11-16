# yMrCaf

O app foi criado utilizando javascript puro.
Na verdade aproveitei para usar uma biblioteca que eu mesmo criei, assim, pude testá-la.

A premissa é a utilização de "javascript puro" somado a padrões como Factory e Observer.

### Componentes

Os componentes são `Factory Functions` e a store de dados é um objeto observável.

Cada componente pode ter as propriedades:

- tagName (A tag do componente)
- template (html do componente)
- styles ( Estilos css do componente)
- state (Dados locais do componente)
- methods (Ações do componente)
- hooks (São ganchos do ciclo de vida)
- Children (Componentes filhos)

### Store, State e reatividade

Como a Store de dados é um objeto o observável, disponibiliza entre outros o método `subscribe` e toda e qualquer modificação em seus dados gera efeitos colaterais.

Em alguns momentos pode ser útil compartilhar fragmentos de dados com o state local dos componentes, por isso, o component disponibiliza o método `set` através do state. Esse método atualiza os dados e reflete as alterações nos templates dos componentes. 

### Start

Para iniciar o projeto em modo dev, utilize `yarn dev` no terminal.


### Build

Para gerar um build para produção utilize `yarn build`, a pasta `dist` será criada na
raiz do projeto contendo tudo que é necessário para ser colocado em produção.


### Mais informações sobre R9X

Como disse, utlizei a lib R9X de minha própria autoria com a intenção de demonstrar que 
meus conhecimentos vão além do Angular. Domino a linguagem javascript e o ecossistema em volta da mesma.

Para saber mais sobre R9X acesse:

- https://github.com/devfreelex/R9X_JS
- https://devfreelex.github.io/r9x-io/#/