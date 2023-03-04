import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

function NavBar() {
    const [selectedItem, setSelectedItem] = useState('livro')

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Menu</Nav.Link>
                        <NavDropdown title={selectedItem} id="basic-nav-dropdown">
                            <NavDropdown.Item href="livro" onSelect={() => setSelectedItem('livro')}>
                                Livro
                            </NavDropdown.Item>
                            <NavDropdown.Item href="cliente" onSelect={() => setSelectedItem('cliente')}>
                                Cliente
                            </NavDropdown.Item>
                            <NavDropdown.Item href="aluguel" onSelect={() => setSelectedItem('aluguel')}>
                                Aluguel
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar