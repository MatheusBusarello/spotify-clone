

//rafce
// const App2 = () => <h1>Hello, world!</h1>

// Nomeação de componente -> PascalCase (ex: Header)

// Nomeação de varável, função... -> camelCase (ex: helloWorld)

//  export default, posso importar com qualquer nome e sem chave
// export "sem default", apenas importa entre chaves e com o nome exportado

// Self closing tag -> ex: <Header/>  || normal <Header> <Header/>

// Nomeação de classes em CSS
// Metodologia BEM (Block, Elements, Modifiers)
// bloco__elemento--modificador
// header
// header__link
// header__link--small
// nomes compostos são separados por -

//Tag vazia em React se chama fragment


// Componentes recebem "props"

// // <div className="item-list__container">
// {Array(items)
//   .fill()
//   .map((currentValue, index) => (
//     <SingleItem key={`${title}-${index}`}/> 
//   ))}  
// </div>

//   spred operator -> ...

// similar
// {artist === undefined ? artist : "Artist"} -> {artist ? artist : "Artist"} -> {artist ?? "Artist"}

// Quando componentes se re-renderizão: uma das ocasiões é quando uma variável de estado usada por este componente é atualizado

// Hook: useState, useEffect