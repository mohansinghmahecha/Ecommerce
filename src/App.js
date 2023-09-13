import React from "react";
import {Route,BrowserRouter,Routes, Router} from 'react-router-dom';
import  Home  from "./Home";
import  About  from "./About";
import Cart from "./Cart";
import SingleProduct from './SingleProduct';
import Products from "./Products";
import ErrorPage from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import {ThemeProvider} from 'styled-components';
import Header from "./components/Header";
import Contact from "./Contact";
import Footer from "./components/Footer";


const App = () => {

  const theme = { 
    colors : {
      bg : "#f6f8fa",
  },
  media: {
    mobile : "768px",
    tab : "998px",
  },
}

  return (
    <>
    
    <ThemeProvider  theme={theme}>
      <BrowserRouter>
      <GlobalStyle/>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/card" element={<Cart/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/singleproduct/:id" element={<SingleProduct/>} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      </ThemeProvider>
    </>
  )
};

export default App;
