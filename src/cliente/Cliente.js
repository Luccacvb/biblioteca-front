import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import api from '../service/api'
import './Cliente.css'
import { formatarCpf } from '../components/validar'

function Cliente() {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        getClientes();
    }, []);

    async function getClientes() {
        await api.get('/cliente').then((response) => {
            setClientes(response.data)
        }).catch((e) => {
            alert(e)
        })
    }

    return (
        <div className="container">
            <h1 className="th">Listagem de Clientes</h1>
            <Table striped bordered hover className="mb-2 mt-5">
                <thead>
                    <tr >
                        <th>Nome</th>
                        <th>CPF</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map((cliente) => (
                        <tr>
                            <td>{cliente.nome}</td>
                            <td>{formatarCpf(cliente.cpf)}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default Cliente;