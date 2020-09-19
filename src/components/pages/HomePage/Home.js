import React from 'react'
import HeroSection from '../../HeroSection'
import {homeObjFour,homeObjTwo, homeObjOne, homeObjThree} from '../../Data/Data'
import Pricing from '../../Pricing'

function Home() {
    return (
        <>
           <HeroSection {...homeObjOne}/> 
           <HeroSection {...homeObjThree}/> 
           <HeroSection {...homeObjTwo}/> 
           <Pricing/>
           <HeroSection {...homeObjFour}/> 
           </>
           );
}

export default Home;
