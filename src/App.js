import { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import api from "./service/api";
import moment from "moment";
import { BsTrash } from 'react-icons/bs';

function App() {
  const [livros, setLivros] = useState([]);
  const [clientes, setClientes] = useState([]);

  const [clienteId, setClienteId] = useState();
  const [livroId, setLivroId] = useState();

  async function cadastrarAluguel() {
    console.log({ clienteId: clienteId, livroId: livroId });
    await api.post("/aluguel", { clienteId: parseInt(clienteId), livroId: parseInt(livroId) }).then((response) => {
      getAluguels();
    });
  }

  const [aluguels, setAlguels] = useState([]);

  async function getAluguels() {
    await api
      .get("/aluguel")
      .then((response) => {
        setAlguels(response.data);
      })
      .catch((e) => {
        alert(e);
      });
  }

  useEffect(() => {
    getAluguels();
    getClientes();
    getLivros();
  }, []);

  async function getClientes() {
    await api.get("/cliente").then((response) => {
      setClientes(response.data);
    });
  }

  async function getLivros() {
    await api.get("/livro").then((response) => {
      setLivros(response.data);
    });
  }

  async function exluir(id) {
    await api.delete(`/aluguel/${id}`).then((response) => {
      let newAlugueis = aluguels.filter((a) => {
        return a.id !== id
      })
      setAlguels([...newAlugueis])
      getAluguels();
    })
  }

  async function devolver(aluguel) {
    aluguel.dataDevolucao = new Date()
    await api.put('/aluguel', aluguel).then((response) => {
      getAluguels()
    })
  }

  return (
    <div className="container">
      <Form>
        <Form.Group className="mb-3" >
          <Form.Label>Cliente</Form.Label>
          <Form.Select
            onChange={(e) => {
              setClienteId(e.target.value);
            }}
            value={clienteId}
          >
            {clientes.map((c) => {
              return <option value={c.id}>{c.nome}</option>;
            })}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Livro</Form.Label>
          <Form.Select
            onChange={(e) => {
              setLivroId(e.target.value);
            }}
            value={livroId}
          >
            {livros.map((v) => {
              return <option value={v.id}>{v.nome}</option>;
            })}
          </Form.Select>
        </Form.Group>
      </Form>
      <Button variant="primary" className="mb-3" onClick={cadastrarAluguel}>
        Cadastrar
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Livro</th>
            <th>Cliente</th>
            <th>Data</th>
            <th>Data Retorno</th>
            <th>Valor Diaria</th>
            <th>Valor</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {aluguels.map((a) => {
            return (
              <tr>
                <td>{a.Livro.nome}</td>
                <td>{a.Cliente.nome}</td>
                <td>{moment(a.data).format("DD/MM/YYYY")}</td>
                <td>
                  {a.dataDevolucao &&
                    moment(a.dataDevolucao).format("DD/MM/YYYY")}
                </td>
                <td>${a.Livro.valorDiaria}</td>
                <td>{a.valorArrecadado}</td>
                <td>
                  <Button variant="outline-danger" onClick={() => { exluir(a.id) }}>
                    <BsTrash />
                  </Button>
                  <Button style={{marginLeft: 20}} variant="outline-primary" onClick={() => { devolver(a) }}>
                    Devolver
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
