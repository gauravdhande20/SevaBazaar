import React from 'react'
import NavBar from './Components/NavBar.jsx'
import HeroSec from './Components/HeroSec.jsx' 
import Cards from './Components/Cards.jsx' 
import Footer from './Components/Footer.jsx'
import itemdata from './../public/items.json'


function App() {
  return (
    <>
      <NavBar/>
      <HeroSec/>
      {
    itemdata.map(item =>{
      return(
    <Cards 
      id={item.id}
      url={item.url}
      color={item.color}
      offer={item.offer}
      off={item.off}
      Catg={item.Catg}
      Name={item.Name}
      quantity={item.quantity}
      price={item.price}
      prv_price={item.prv_price}
      />)})
      }
      <Footer/>
      
    </>
  )
}

export default App
