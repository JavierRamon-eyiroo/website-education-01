
import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './free-course.css'
import FreeCourseCard from './FreeCourseCard'

/*==============Importacion de imagenes=================*/
import courseImg01 from '../../assests/images/web-development.png'
import courseImg02 from '../../assests/images/kids-learning.png'
import courseImg03 from '../../assests/images/seo.png'
import courseImg04 from '../../assests/images/ui-ux.png'

const freeCourseData = [
    {
        id: '01',
        title: 'Basic Web Development Corse',
        imgUrl: courseImg01,
        students: 5.3,
        rating: 1.7
    },

    {
        id: '02',
        title: 'Coding for Junior Basic Course',
        imgUrl: courseImg02,
        students: 5.3,
        rating: 1.7
    },

    {
        id: '03',
        title: 'Search Engine Optimization - Basic',
        imgUrl: courseImg03,
        students: 5.3,
        rating: 1.7
    },

    {
        id: '04',
        title: 'Basic UX/UX Design - Figma',
        imgUrl: courseImg04,
        students: 5.3,
        rating: 1.7
    },
]


const FreeCourse = () => {
  return <section>
    <Container>
        <Row>
            <Col lg='12' className='text-center mb-5' >
                <h2 className='fw-bold'>Nuestros cursos GRATIS.</h2>
            </Col>

            {
                freeCourseData.map(item => (
                    <Col lg='3' key={item.id} >
                        <FreeCourseCard item={item} />
                    </Col>                   
                ))
            }


        </Row>
    </Container>
  </section>
}

export default FreeCourse