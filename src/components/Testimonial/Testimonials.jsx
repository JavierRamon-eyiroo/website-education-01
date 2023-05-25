
import React from 'react';
import './testimonial.css';
import { Container, Row, Col } from 'reactstrap';

/*=====Importacion de animacion tipo carrosel ===*/
import Slider from "react-slick";

/*==============Importacion de imagenes=================*/
import img from '../../assests/images/testimonial01.png';

const Testimonials = () => {

    const settings = {
        infinite: true,
        dots: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
    };

  return (<section>
    <Container>
        <Row>
            <Col lg='10' md='12' className='m-auto'>
                <div className='testimonial__wrapper d-flex justify-content-between align-items-center'>
                    <div className='testimonial__img w-50'>
                        <img src={img} alt='' className='w-100'/>
                    </div>
                    <div className='testimonial__content w-50'>
                        <h2 className='mb-4'>Nuestros Estudiantes.</h2>

                        <Slider {...settings}>
                            <div>
                                <div className='single__testimonial'>
                                    <h6 className='mb-3 fw-bold'>Excelentes cursos.</h6>
                                    <p>Me gusta mucho la metodologia que aplican, lo que los hace muy comprensibles a los cursos y ademas aprendi mucho con los ejemplos practivos que nos dan.</p>

                                    <div className='student__info mt-4'>
                                        <h6 className='fw-bold'>Lorena Pucha.</h6>
                                        <p>Ecuador, Los Rios</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='single__testimonial'>
                                    <h6 className='mb-3 fw-bold'>Excelentes cursos.</h6>
                                    <p>Me gusta mucho la metodologia que aplican, lo que los hace muy comprensibles a los cursos y ademas aprendi mucho con los ejemplos practivos que nos dan.</p>

                                    <div className='student__info mt-4'>
                                        <h6 className='fw-bold'>Lorena Pucha.</h6>
                                        <p>Ecuador, Los Rios</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='single__testimonial'>
                                    <h6 className='mb-3 fw-bold'>Excelentes cursos.</h6>
                                    <p>Me gusta mucho la metodologia que aplican, lo que los hace muy comprensibles a los cursos y ademas aprendi mucho con los ejemplos practivos que nos dan.</p>

                                    <div className='student__info mt-4'>
                                        <h6 className='fw-bold'>Lorena Pucha.</h6>
                                        <p>Ecuador, Los Rios</p>
                                    </div>
                                </div>
                            </div>
                
                        </Slider>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  </section>
  );
};

export default Testimonials