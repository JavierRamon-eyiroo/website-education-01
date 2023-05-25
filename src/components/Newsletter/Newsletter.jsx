
import React from 'react'
import './newsletter.css'
import { Container, Row, Col } from 'reactstrap'

const Newsletter = () => {
  return <section>
    <Container className='newsletter'>
        <Row>
            <Col lg='12' className='text-center'>
                <h2 className='mb-4'>Subscibete a nuestras noticias</h2>
                <div className='subscribe'>
                    <input type='text' placeholder='Correo electronico'></input>
                    <button className='btn'>Subscibete</button>
                </div>
                
            </Col>
        </Row>
    </Container>
  </section>
}

export default Newsletter