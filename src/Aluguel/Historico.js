import React, { useEffect, useState } from "react"
import { Table, DropdownButton, Dropdown } from "react-bootstrap"
import moment from "moment"
import api from "../service/api"

function HistoricoAlugueis() {
    const [aluguels, setAluguels] = useState([])
    const [clientes, setClientes] = useState([])
    const [selectedCliente, setSelectedCliente] = useState()

    async function getAluguels(clienteId) {
        await api.get(`/aluguel`).then((response) => {
            const aluguelsDoCliente = response.data.filter((a) => a.clienteId === clienteId)
            setAluguels(aluguelsDoCliente)
        })
            .catch((e) => {
                alert(e)
            })
    }

    useEffect(() => {
        if (selectedCliente) {
            getAluguels(selectedCliente.id)
        }
    }, [selectedCliente])

    async function getClientes() {
        await api.get("/cliente").then((response) => {
            setClientes(response.data)
        })
    }

    useEffect(() => {
        getClientes()
    },)


    return (
        <div className="container-fluid">
            <DropdownButton
                className="mb-3"
                id="dropdown-basic-button"
                title={selectedCliente ? selectedCliente.nome : "Escolha um cliente"}
            >
                {clientes.map((c) => (
                    <Dropdown.Item key={c.id} onClick={() => setSelectedCliente(c)}>
                        {c.nome}
                    </Dropdown.Item>
                ))}
            </DropdownButton>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Livro</th>
                        <th>Data</th>
                        <th>Valor Diária</th>
                    </tr>
                </thead>
                <tbody>
                    {aluguels.length > 0 ? (
                        aluguels.map((a) => (
                            <tr key={a.id}>
                                <td>{a.Livro.nome}</td>
                                <td>{moment(a.data).format("DD/MM/YYYY")}</td>
                                <td>${a.Livro.valorDiaria}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" style={{ textAlign: "center" }}>
                                Selecione um cliente que possua histórico para ver os aluguéis.
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}

export default HistoricoAlugueis