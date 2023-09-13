import React from 'react'
import { NavLink } from 'react-router-dom';
import  styled  from 'styled-components'
import Nav from '../components/Nav';


const myImg = "/images/logo.png"

const Header = () => {
  return (
    <MainHeaader>
     <NavLink to={"/"}>
     <img src={myImg} alt='loadsing' />
    </NavLink> 
    <Nav/>

    </MainHeaader>
  )
};

const MainHeaader = styled.header`
 padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }

`;

export default Header;