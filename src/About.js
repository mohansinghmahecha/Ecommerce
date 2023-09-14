import React from 'react'
import HeroSection from './components/HeroSection'

export default () => {

  const namepass = {
    name : "About Pages",
  };
  
  return (
    <HeroSection myData={namepass} />
  )
}
