import { useEffect, useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap"
import api from '../service/api'
import moment from 'moment'
import './Aluguel.css';


function Aluguel() {
    const [show, setShow] = useState(false);
    const [livros, setLivros] = useState([]);
    const [clientes, setClientes] = useState([]);

    const [clienteId, setClienteId] = useState('')
    const [livroId, setLivroId] = useState('')
    const [aluguels, setAluguels] = useState([])

    const handleClose = () => setShow();
    const handleShow = () => setShow(true);

    async function cadastrarAluguel() {
        console.log('Cadastrando aluguel...')
        await api.post('/aluguel', { clienteId: parseInt(clienteId), livroId: parseInt(livroId) })
        getAluguels();
        setShow(false)
    }

    useEffect(() => {
        getAluguels().catch((error) => {
            console.error("Falha ao buscar os aluguéis", error);
        })
    }, [])

    async function getAluguels() {
        await api.get('/aluguel').then((response) => {
            setAluguels(response.data)
        }).catch((e) => {
            alert(e)
        })
    }


    useEffect(() => {
        getCliente()
        getLivros()
    }, [])

    async function getCliente() {
        await api.get('/cliente',).then((response) => {
            setClientes(response.data)
        })
    }
    async function getLivros() {
        await api.get('/livro',).then((response) => {
            setLivros(response.data)
        })
    }

    return (
        <div className="container">
            <h1 className='th'> Alugueis de Livros </h1>
            <Button className="mb-3 mt-5" variant="primary" onClick={handleShow}>
                Cadastrar Aluguel
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Cadastrar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5 className="mb-3 mt-3"> Cliente</h5>
                    <Form.Select onChange={(e) => { setClienteId(e.target.value) }} value={clienteId} aria-label="Default select example">
                        {clientes.map((c) => {
                            return (
                                <option value={c.id}>{c.nome}</option>
                            )
                        })}

                    </Form.Select >
                    <h5 className="mb-3 mt-3">Livro</h5>
                    <Form.Select onChange={(e) => { setLivroId(e.target.value) }} value={livroId} aria-label="Default select example">
                        {livros.map((v) => {
                            return (
                                <option value={v.id}>
                                    {v.nome}
                                </option>
                            )
                        })}
                    </Form.Select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                    <Button variant="primary" onClick={() => cadastrarAluguel()}>
                        Salvar
                    </Button>
                </Modal.Footer>
            </Modal>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Livro</th>
                        <th>Cliente</th>
                        <th>Data</th>
                        <th>Data Retorno</th>
                        <th>Valor Diaria</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        aluguels.map((a) => (
                            <tr>
                                <td>{a.Livro.nome}</td>
                                <td>{a.Cliente.nome}</td>
                                <td>{moment(a.data).format('DD/MM/YYYY')}</td>
                                <td>{a.dataDevolucao && moment(a.dataDevolucao).format('DD/MM/YYYY')}</td>
                                <td>${a.Livro.valorDiaria}</td>
                                <td>${a.valorArrecadado}</td>
                            </tr>
                        )
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Aluguel