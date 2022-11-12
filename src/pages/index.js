import React, { useEffect } from "react";
import './gatsby-browser'; 

import Header from "../Components/header/header";
import Banner from "../Components/homepage-components/banner";
import Retail from "../Components/homepage-components/retail";
import Cards from "../Components/homepage-components/cards";
import SecionN from "../Components/homepage-components/sectionN";
import Bottom from "../Components/homepage-components/bottom";
import Footer from "../Components/footer/footer";
import "./style.css"
// import {btnRed} from "./style.module.css";

export const Head = () => <title>HelloGB-Home</title>

const IndexPage = () => {
  
  return (
    <main>     
      <Header/>

      <Banner />
   
      <Retail title="abc Marketplace"/>

      <Cards />

      <Bottom />

      <SecionN />

      <Footer/>
    </main>
  )
};

export default IndexPage
