import { useState, useEffect } from 'react'
import {
    Container,
    Nav,
    Navbar,
    NavDropdown,
    Offcanvas,
} from 'react-bootstrap'
import { AiOutlineHome, AiOutlineHistory } from 'react-icons/ai'
import { GiArchiveRegister } from 'react-icons/gi'



function OffcanvasExample() {
    const [select, setSelect] = useState('livro')

    useEffect(() => {
        // atualiza o estado do select de acordo com a rota atual
        const pathname = window.location.pathname
        const routeName = pathname.substring(1)
        const capitalizedRouteName = routeName.charAt(0).toUpperCase() + routeName.slice(1)
        setSelect(capitalizedRouteName)
    }, [setSelect])

    return (
        <>
            {[false].map((expand) => (
                <Navbar
                    key={expand}
                    bg="primary"
                    variant="dark"
                    expand={expand}
                    className="mb-3 "
                >
                    <Container fluid>
                        <Navbar.Toggle
                            aria-controls={`offcanvasNavbar-expand-${expand}`}
                        />
                        <Navbar.Brand
                            href="#"
                            className="ms-auto me-auto"
                        >
                            <h1>{select}</h1>
                        </Navbar.Brand>
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="start"
                        >
                            <Offcanvas.Header
                                className="animate__animated animate__fadeInLeft"
                                closeButton
                            >
                                <Offcanvas.Title
                                    id={`offcanvasNavbarLabel-expand-${expand}`}
                                >
                                    Menu
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link
                                        href="home"
                                        className="animate__animated animate__fadeInLeft d-flex align-items-center"
                                    >
                                        <AiOutlineHome
                                            size="1.5em"
                                            style={{ marginRight: '5px' }}
                                        />
                                        <span
                                            className="fs-5"
                                            style={{ marginTop: '3px' }}
                                        >
                                            Home
                                        </span>
                                    </Nav.Link>
                                    <NavDropdown
                                        title={
                                            <>
                                                <GiArchiveRegister size="1.3em"
                                                    style={{ marginRight: '5px' }}
                                                />
                                                Cadastrar
                                            </>
                                        }
                                        id="basic-nav-dropdown"
                                        className="animate__animated animate__fadeInLeft fs-5"
                                    >
                                        <NavDropdown.Item
                                            href="livro"
                                            className="animate__animated animate__fadeInDown fs-5"
                                        >
                                            Livro
                                        </NavDropdown.Item>
                                        <NavDropdown.Item
                                            href="cliente"
                                            className="animate__animated animate__fadeInDown fs-5"
                                        >
                                            Cliente
                                        </NavDropdown.Item>
                                        <NavDropdown.Item
                                            href="aluguel"
                                            className="animate__animated animate__fadeInDown fs-5"
                                        >
                                            Aluguel
                                        </NavDropdown.Item>
                                        <NavDropdown.Item
                                            href="historico"
                                            className="animate__animated animate__fadeInDown fs-5"
                                        >
                                        </NavDropdown.Item>
                                    </NavDropdown>

                                    <Nav.Link
                                        href="historico"
                                        className="animate__animated animate__fadeInLeft d-flex align-items-center fs-5"
                                    >
                                        < AiOutlineHistory
                                            size="1.3em"
                                            style={{ marginRight: '5px' }}
                                        />
                                        <span
                                            className="fs-5"
                                            style={{ marginTop: '3px' }}
                                        >
                                            Histórico
                                        </span>
                                    </Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default OffcanvasExample;