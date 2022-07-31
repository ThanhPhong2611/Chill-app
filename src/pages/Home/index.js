import Home from "../../components/BodyPages/Home";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import React, { useEffect } from "react";
export default function HomePage() {
  
  useEffect(() => {
    const randomNumberSpace = Math.floor(Math.random() * 1000);
    window.location.href = `/app?space=${randomNumberSpace}`;
  }, []);
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}
