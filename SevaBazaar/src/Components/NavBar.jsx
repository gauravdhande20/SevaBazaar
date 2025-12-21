import React from 'react'

function NavBar() {
  return (
    <div>
      <section className="bg-blue-500 text-white p-4">
        <h1 className="text-xl font-bold">NavBar</h1>
        <nav className="flex space-x-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Products</a>
          <a href="#" className="hover:underline">Services</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>
        <div className="icons">
          <span className="material-icons mr-4 cursor-pointer">search</span>
          <span className="material-icons cursor-pointer">shopping_cart</span>
        </div>

      </section>
    </div>
  )
}

export default NavBar
