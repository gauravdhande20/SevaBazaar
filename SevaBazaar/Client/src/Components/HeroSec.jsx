import React from 'react'

function HeroSec() {
  return (
    <>
      <section className="w-full min-h-screen bg-gradient-to-r from-[#F6EDB7] to-[#F3E6A4] flex items-center">
        <div className="container mx-auto   grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
              ● NEW MARKETPLACE LAUNCHED
            </span>

            <h1 className="text-5xl font-extrabold text-[#6B4B3E] leading-tight">
              Empowering NGOs <br />
              Through <span className="text-green-600 underline">Handmade</span>{" "}
              <span className="text-green-600 underline">Products</span>
            </h1>

            <p className="text-gray-700 max-w-xl">
              Discover unique, ethically sourced items that support local
              artisans and communities directly. Every purchase creates a real
              impact.
            </p>

            <div className="flex gap-4">
              <button className="bg-[#6B4B3E] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#5a3f34] transition">
                Explore Products
              </button>
              <button className="border border-[#6B4B3E] text-[#6B4B3E] px-6 py-3 rounded-full font-semibold hover:bg-[#6B4B3E] hover:text-white transition">
                Register NGO
              </button>
            </div>

            <div className="flex gap-12 pt-6">
              <div>
                <h3 className="text-xl font-bold text-[#6B4B3E]">500+</h3>
                <p className="text-sm text-gray-600">VERIFIED NGOS</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#6B4B3E]">12k+</h3>
                <p className="text-sm text-gray-600">ARTISAN ITEMS</p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="grid grid-cols-2 gap-6">

            <div className="col-span-1 rounded-3xl overflow-hidden shadow-lg">
              {/* <img
              src={heroImg1}
              alt="Handmade weaving"
              className="w-full h-full object-cover"
            /> */}
            </div>

            <div className="bg-[#6B4B3E] text-white rounded-3xl flex items-center justify-center text-center p-6 shadow-lg">
              <div>
                <h2 className="text-4xl font-bold">100%</h2>
                <p className="text-sm mt-2">Profits go to NGOs</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-lg flex items-center">
              <div>
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mb-3">
                  🌱
                </div>
                <p className="font-semibold text-gray-800">
                  100% Eco-friendly <br /> Materials
                </p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-lg">
              {/* <img
              src={heroImg2}
              alt="Artisan with pot"
              className="w-full h-full object-cover"
            /> */}
            </div>

          </div>
        </div>
      </section>

    </>
  )
}

export default HeroSec
