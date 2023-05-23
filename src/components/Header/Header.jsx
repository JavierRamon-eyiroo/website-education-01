import React from 'react'
import { Container } from 'reactstrap';
import './header.css'

const navLinks = [
    {
        display: 'Home',
        url: '#'
    },
    {
        display: 'About',
        url: '#'
    },
    {
        display: 'Courses',
        url: '#'
    },
    {
        display: 'Page',
        url: '#'
    },
    {
        display: 'Blog',
        url: '#'
    },
]


const Header = () => {
  return (
    <section>
        <Container>
            <div className='navigation'>
                <div className='logo'>
                    <h2>
                        <i class="ri-pantone-line"></i>Learners.
                    </h2>
                </div>

                <div className='nav'>
                    <div className='nav__menu'>

                        <ul className='nav__list'>
                        {
                            navLinks.map((item,index)=>(
                                <li key={index} className='nav__item'>
                                    <a href={item.url}>{item.display}</a>
                                </li>
                            ))
                        }    
                        </ul>

                    </div>

                    <div className='nav__right'>
                        <p><i class="ri-phone-line"> (+593) 0988189017 </i></p>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  );
};

export default Header