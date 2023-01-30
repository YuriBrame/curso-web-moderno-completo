export default function Cabecalho(props) {
  // props é somente leitura e não pode ser modificado.
  return (
    <header>
      <h1>{props.titulo}</h1>
    </header>
  )
}