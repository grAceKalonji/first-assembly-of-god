import React from 'react'
import "../../App.css";
import HeroSection from "../HeroSection";
import Cards from '../Cards';
import StackedCard from '../StackedCard';
import Quote from '../Quote';
import AboutUsSection from "../aboutUsSection";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards/>
      <StackedCard/>
      <AboutUsSection/>
      <Quote/>
      
    </>
  )
}

export default Home; 
