import React from 'react'
import HeroSection from './components/HeroSection'

export default () => {
  const namepass = {
    name : "thapa ecommerce",
  };
  return (
    <HeroSection myData={namepass} />
  )
}
