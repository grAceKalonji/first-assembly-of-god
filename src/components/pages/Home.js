import React from 'react'
import "../../App.css";
import HeroSection from "../HeroSection";
import Cards from '../Cards';
import StackedCard from '../StackedCard';
import Quote from '../Quote';
import AboutUsSection from "../aboutUsSection";
import DonateSec from '../donateSec';
import BookCard from '../BookCard';



function Home() {
  return (
    <>
      <HeroSection />
      <Cards/>
      <DonateSec/>
      <StackedCard/>
      {/* <BookCard/> */}

      <AboutUsSection/>
      <Quote/>
      
    </>
  )
}

export default Home; 
