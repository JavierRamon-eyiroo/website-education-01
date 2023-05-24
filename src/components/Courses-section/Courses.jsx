
import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import courseImg1 from '../../assests/images/web-design.png'

import courseImg2 from '../../assests/images/graphics-design.png'
import courseImg3 from '../../assests/images/ui-ux.png'
import './courses.css'

const Courses = () => {
  return <section>
    <Container>
        <Row>
            <Col lg='4'>
                <div className='single__course__item'>
                    <div className='course__img'>
                        <img src={courseImg1} alt='' className='w-100' />
                    </div>

                    <div className='course__details'>
                        <h5 className='course__title mb-4'>
                            Web Design BootCamp-2022 for Beginners
                        </h5>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p className='lesson d-flex align-items-center gap-1'>
                                <i class="ri-book-open-line"></i>
                                12 Lessons
                            </p>
                            <p className='students d-flex align-items-center gap-1'>
                                <i class="ri-user-line"></i>
                                12.5k 
                            </p>
                        </div>

                        <div className='d-flex justify-content-between align-items-center'>
                            <p className='rating d-flex align-items-center gap-1'>
                                <i class="ri-star-fill"></i>
                                5.9k
                            </p>
                            <p className='enroll d-flex align-items-center gap-1'>
                                <a href='#'> Enroll Now</a>
                            </p>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  </section>
};

export default Courses