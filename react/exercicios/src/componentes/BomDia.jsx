import React from "react";

const bomDia = props => [
  <h1 key='h1'>Bom dia {props.nome}!</h1>,
  <h2 key='h2'>Até breve!</h2>
]

export default bomDia

// export default props => 
//   <React.Fragment>
//     <h1>Bom dia {props.nome}!</h1>
//     <h2>Até breve!</h2>
//   </React.Fragment>

// export default props => 
//   <div>
//     <h1>Bom dia {props.nome}!</h1>
//     <h2>Até breve!</h2>
//   </div>