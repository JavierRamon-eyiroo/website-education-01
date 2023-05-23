
import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import heroImg from '../../assests/images/hero-img1.png'

const HeroSection = () => {
  return <section>
    <Container>
        <Row>
            <Col lg='6' md='6'>
                <div className='hero__content'>
                    <h2>Anytime Anywhere Learn on your Suitable Schedule</h2>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipusicing elit. Aunt saepe volunptatum earum delectus deserunt id iste, quas officiis et repellat
                    </p>
                </div>

                <div className='search'>
                    <input type='text' placeholder='Search' />
                    <button className='btn'>Search</button>
                </div>
            </Col>

            <Col lg='6' md='6'>
                <img src={heroImg} alt='' className='w-100' />
            </Col>
        </Row>
    </Container>
  </section>
}

export default HeroSection