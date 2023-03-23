import "./styles.css";

export default function App() {
  //variável produtos
  const produtos = [
    { nome: "Arroz", preco: 6.8, foto: "arroz.png" },
    { nome: "Farinha de trigo", preco: 5.48, foto: "farinha.png" },
    { nome: "Batata frita", preco: 7.5, foto: "batata.png" }
  ];
  //variável lista
  const lista = produtos.map((prod) => (
    // tr: Define uma linha numa tabela
    // td: Define cada uma das células da tabela
    <tr>
      <td>{prod.nome}</td>
      <td>{prod.preco}</td>
      <td>
        <img
          src={prod.foto}
          alt={"foto de " + prod.nome} //O atributo alt fornece informações alternativas para uma imagem se um usuário por algum motivo não puder visualizá-la
          className="foto-lista"
        />
      </td>
    </tr>
  ));

  return (
    // th:define uma célula cabeçalho do
    //grupo de células de sua tabela
    <div>
      <h1>Lista de Produtos</h1>
      <table className="table table-striped">
        <tr>
          <th>Descrição do produto</th>
          <th>Preço R$</th>
          <th>Foto</th>
        </tr>
        {lista}
      </table>
    </div>
  );
}
