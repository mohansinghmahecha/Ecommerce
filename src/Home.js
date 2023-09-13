import React from 'react'
import styled from "styled-components";
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Trusted from './components/Trusted';
import FeatureProduct from './components/FeatureProduct';

 
//rafc
const Home = () => {

const namepass = {
  name : "Namaste ! Bharat ",
 };
 
 return (
  <div><HeroSection myData={namepass} />
  <FeatureProduct/>
  <Services/>
  <Trusted/>
  </div>
 )
 
   

  
};

const Wrapper = styled.section`
height : 100vh;
background-color: ${({ theme })=> theme.colors.bg};

`;
export default Home;
