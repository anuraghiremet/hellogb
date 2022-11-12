import React, { useEffect } from "react";
import './gatsby-browser'; 

import Header from "../Components/header/header";
import Retail from "../Components/homepage-components/retail";
import Footer from "../Components/footer/footer";
import "./style.css"
// import {btnRed} from "./style.module.css";

export const Head = () => <title>HelloGB-Home</title>

const IndexPage = () => {
  
  return (
    <main>     
      <Header/>
   
      <Retail title="abc Marketplace"/>

      <Footer/>
    </main>
  )
};

export default IndexPage
