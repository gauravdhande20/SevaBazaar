import React from 'react'
import NavBar from '../Components/NavBar.jsx'
import HeroSec from '../Components/HeroSec.jsx';
import ShopCategory from '../Components/ShopCategory.jsx';
import BasicCard from '../Components/BasicCard.jsx';
import WhyShop from '../Components/WhyShop.jsx';
import Footer from '../Components/Footer.jsx'


function Home() {
  return (
    <div>
      <NavBar/>
       <HeroSec/>
        <ShopCategory/>
        <BasicCard/>
        <WhyShop/>
        <Footer/>
    </div>
  )
}

export default Home
