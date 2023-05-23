
import React from 'react'
import { Container } from 'reactstrap';
import './header.css'

const Header = () => {
  return <section>
    <Container>
        <div className='navigation'>
            <div className='logo'>
                <h2><i class="ri-pantone-line"></i>Learners.</h2>
            </div>
        </div>
    </Container>
  </section>
};

export default Header