
import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import './footer.css'

const footerQuickLinks = [
    {
        display: 'Home',
        url: '#'
    },
    {
        display: 'Sobre nosotros',
        url: '#'
    },
    {
        display: 'Cursos',
        url: '#'
    },
    {
        display: 'Paginas',
        url: '#'
    },
    {
        display: 'Blog',
        url: '#'
    },
]

const footerInfoLinks = [
    {
        display: 'Politicas de privacidad',
        url: '#'
    },
    {
        display: 'Menbresias',
        url: '#'
    },
    {
        display: 'Guias tecnicas',
        url: '#'
    },
    {
        display: 'Terminos del servicio',
        url: '#'
    },
]


const Footer = () => {
  return <footer className='footer'>
    <Container>
        <Row>
            <Col lg='3' md='6' className='mb-4'>
               <h2 className='d-flex align-items-center gap-1'><i class="ri-pantone-line"></i>Learners.</h2> 

               <div className='follows'>
                    <p className='mb-0'>Siguenos en nuestras redes.</p>
                    <span> {" "}
                        <a href='facebook.com'>
                            <i class="ri-facebook-line"></i>
                        </a>
                    </span>

                    <span> {" "}
                        <a href='facebook.com'>
                            <i class="ri-instagram-line"></i>
                        </a>
                    </span>

                    <span> {" "}
                        <a href='facebook.com'>
                            <i class="ri-linkedin-line"></i>
                        </a>
                    </span>

                    <span> {" "}
                        <a href='facebook.com'>
                            <i class="ri-twitter-line"></i>
                        </a>
                    </span>
               </div>
            </Col>

            <Col lg="3" md="6" className="mb-4">
            <h6 className='fw-bold'>Explorar.</h6>
                <ListGroup className='link__list'>
                    {
                     footerQuickLinks.map((item,index) => (
                        <ListGroupItem key={index} className='border-0 ps-0 link__item'><a href={item.url}>{item.display}</a></ListGroupItem>
                     ))   
                    }
                </ListGroup>
            </Col>

            <Col lg="3" md="6" className="mb-4">
            <h6 className='fw-bold'>Información.</h6>
                <ListGroup className='link__list'>
                    {
                     footerInfoLinks.map((item,index) => (
                        <ListGroupItem key={index} className='border-0 ps-0 link__item'><a href={item.url}>{item.display}</a></ListGroupItem>
                     ))   
                    }
                </ListGroup>
            </Col>

            <Col lg='3' md='6'>
                <h6 className='fw-bold'>Ponerse en contacto.</h6>
                <p>Dirección: Cuenca - Ecuador.</p>
                <p>Phone: (+593) 0988189017. </p>
                <p>Email: javier.ramon@eyiroo.com</p>
            </Col>
        </Row>
    </Container>
  </footer>
}

export default Footer;