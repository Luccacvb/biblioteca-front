import { useEffect, useState } from "react";
import { Table, Button, Form } from "react-bootstrap";
import api from '../service/api'
import { BsTrash } from 'react-icons/bs';

function Livro() {
    const [livros, setLivros] = useState([]);
    const [nome, setNome] = useState('')
    const [diaria, setDiaria] = useState('')


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

    async function cadastrarLivro() {
        await api.post('/livro', { nome: nome, valorDiaria: diaria })
            .then((response) => {
                setNome('');
                setDiaria('');
                getLivros();
            })
            .catch((error) => {
                alert(error);
            });
    }

    async function exluir(id) {
        await api.delete(`/livro/${id}`).then((response) => {
            let newLivros = livros.filter((l) => {
                return l.id !== id
            })
            setLivros([...newLivros])
        }).catch(({ response }) => {
            alert(response.data)
        })
    }

    return (
        <div className="container-fluid">
            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={(e) => {
                            setNome(e.target.value);
                        }}
                        value={nome}
                        placeholder="Nome do livro"
                        autoFocus
                    />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Valor diaria</Form.Label>
                    <Form.Control
                        type="number"
                        onChange={(e) => {
                            setDiaria(e.target.value);
                        }}
                        value={diaria}
                        placeholder="Valor da diaria"
                        autoFocus
                    />
                </Form.Group>
            </Form>
            <Button variant="primary" className="mb-3" onClick={cadastrarLivro}>
                Cadastrar
            </Button>
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Alugado</th>
                        <th>Valor Diária</th>
                        <th> Ação </th>
                    </tr>
                </thead>
                <tbody>
                    {livros.map((livro) => (
                        <tr>
                            <td>{livro.nome}</td>
                            <td>{livro.alugado ? "Sim" : "Não"}</td>
                            <td>${livro.valorDiaria}</td>
                            <td>
                                <Button variant="outline-danger" onClick={() => { exluir(livro.id) }}>
                                    <BsTrash />
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default Livro;