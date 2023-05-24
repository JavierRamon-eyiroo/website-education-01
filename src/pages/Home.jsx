import React, { Fragment } from 'react'
import Header from '../components/Header/Header';
import HeroSection from '../components/Hero-Section/HeroSection';
import Company from '../components/Company-section/Company';
import AboutUs from '../components/About-us/AboutUs';
import Courses from '../components/Courses-section/Courses';

const Home = () => {
  return (
  <Fragment>
    <Header />
    <HeroSection />
    <Company />
    <AboutUs />
    <Courses />
  </Fragment>
  );
};

export default Home