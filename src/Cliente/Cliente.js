import { useEffect, useState } from "react"
import { Table, Form, Button } from "react-bootstrap"
import api from '../service/api'
import { validateBr } from 'js-brasil'
import { BsTrash } from 'react-icons/bs'
import { formatarCpf } from '../components/validar'

function Cliente() {
    const [clientes, setClientes] = useState([])
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [isValid, setIsValid] = useState(false)

    useEffect(() => {
        getClientes()
    }, [])

    async function getClientes() {
        await api.get('/cliente').then((response) => {
            setClientes(response.data)
        }).catch((e) => {
            alert(e)
        })
    }

    async function cadastrarCliente() {
        await api.post('/cliente', { nome: nome, cpf: cpf })
            .then((response) => {
                setNome('')
                setCpf('')
                getClientes()
            })
            .catch((error) => {
                alert(error)
            })
    }

    async function exluir(id) {
        await api.delete(`/cliente/${id}`).then((response) => {
            let newCliente = clientes.filter((l) => {
                return l.id !== id
            })
            setClientes([...newCliente])
        }).catch(({ response }) => {
            alert(response.data)
        })
    }

    return (
        <div className="container-fluid">
            <Form >
                <Form.Group className="mb-3" >
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={(e) => {
                            setNome(e.target.value)
                        }}
                        value={nome}
                        placeholder="Digite o nome do cliente"
                        autoFocus
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>CPF</Form.Label>
                    <Form.Control
                        isInvalid={isValid}
                        type="number"
                        onChange={(e) => {
                            setIsValid(!validateBr.cpf(e.target.value))
                            setCpf(e.target.value)
                        }}
                        value={cpf}
                        placeholder="Digite o CPF"
                        autoFocus
                    />
                </Form.Group>
            </Form>
            <Button variant="primary" className="mb-3" onClick={cadastrarCliente}>
                Cadastrar
            </Button>
            <Table striped bordered hover >
                <thead>
                    <tr >
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map((cliente) => (
                        <tr>
                            <td>{cliente.nome}</td>
                            <td>{formatarCpf(cliente.cpf)}</td>
                            <td>
                                <Button variant="outline-danger" onClick={() => { exluir(cliente.id) }}>
                                    <BsTrash />
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default Cliente