import React from 'react'
import { Col, Row, Button, Card } from 'react-bootstrap'
import TypeWriter from '../components/typeWriter'


function Oferta() {
    return (

        <div className="justify-content-md-center mt-5" >
            <h3><TypeWriter>Avise os clientes dos livros em oferta da semana:</TypeWriter></h3>
            <Row>
                <Col sm={3}>
                    <Card>
                        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/81PHloIwKnL.jpg" />
                        <Card.Body>
                            <Card.Title style={{ fontFamily: 'Pacifico' }}>Harry potter 7</Card.Title>
                            <Card.Text>
                                Preço: R$ 9,99
                            </Card.Text>
                            <Button variant="primary" href="/aluguel">Alugar</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={3}>
                    <Card>
                        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71NsVQ5MlwL.jpg" />
                        <Card.Body>
                            <Card.Title style={{ fontFamily: 'Pacifico' }}>Harry potter 2 </Card.Title>
                            <Card.Text>
                                Preço: R$ 39,99
                            </Card.Text>
                            <Button variant="primary" href="/aluguel">Alugar</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={3}>
                    <Card>
                        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/61jgm6ooXzL.jpg" />
                        <Card.Body>
                            <Card.Title style={{ fontFamily: 'Pacifico' }}>Harry potter 1</Card.Title>
                            <Card.Text>
                                Preço: R$ 19,99
                            </Card.Text>
                            <Button variant="primary" href="/aluguel">Alugar</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={3}>
                    <Card>
                        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/8172dLr8Z7L.jpg" />
                        <Card.Body>
                            <Card.Title style={{ fontFamily: 'Pacifico' }}>Harry potter 4 </Card.Title>
                            <Card.Text>
                                Preço: R$ 29,99
                            </Card.Text>
                            <Button variant="primary" href="/aluguel">Alugar</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Oferta