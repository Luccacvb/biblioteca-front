import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import api from '../service/api'

function Livros() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    getLivros();
  }, []);

  async function getLivros() {
    await api.get('/livro').then((response) => {
      setLivros(response.data)
    }).catch((e) => {
      alert(e)
    })
  }

  return (
    <div className="container">
      <h1 className="th">Listagem de Livros</h1>
      <Table striped bordered hover className="mb-2 mt-5">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Alugado</th>
            <th>Valor Diária</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <tr>
              <td>{livro.nome}</td>
              <td>{livro.alugado ? "Sim" : "Não"}</td>
              <td>${livro.valorDiaria}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Livros;