import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import {NotFound} from "../../components/not_found/NotFound";

const NotFoundPage = () => {

  return (
    <>
      <Header/>
      <NotFound/>
      <Footer/>
    </>
  )
}

export default NotFoundPage