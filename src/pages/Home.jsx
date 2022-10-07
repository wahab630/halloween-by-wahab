import React from 'react'
import FAQS from '../components/elements/FAQS'
import Firstcomp from '../components/elements/Firstcomp'
import Fourthcomp from '../components/elements/Fourthcomp'
import Hero from '../components/elements/Hero'
import Secondcomp from '../components/elements/Secondcomp'
import Thirdcomp from '../components/elements/Thirdcomp'

const Home = () => {
  return (
    <>
    <Hero/>
    <Firstcomp/>
    <Secondcomp/>
    <Thirdcomp/>
    <Fourthcomp/>
    <FAQS/>
    </>
  )
}

export default Home