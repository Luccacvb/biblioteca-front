import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import TypeWriter from '../components/typeWriter'

function Home() {
    return (
        <div>
            <Container className="animate__animated animate__fadeIn">
                <Row className="justify-content-md-center mt-5">
                    <Col md="10">
                        <h1><TypeWriter>Bem-vindo ao nosso sistema da loja de livros!</TypeWriter></h1>
                        <p className="lead">
                            <TypeWriter>Aqui você encontra uma grande variedade de livros dos mais diversos gêneros.</TypeWriter>
                        </p>
                        <br />
                        <p className="lead">
                            <TypeWriter>Verifque os Livros para os clientes!</TypeWriter>
                        </p>
                        <Button variant="outline-primary" href="/livro"> Livros  </Button>
                        <br /><br />
                        <p className="lead">  <TypeWriter>Consulte os alugueis para os clientes! </TypeWriter></p>
                        <Button variant="outline-primary" href="/aluguel"> Alugueis  </Button>
                    </Col>
                </Row>
            </Container>
        </div >
    );
}

export default Home;