import React from 'react'
import Cards from './Cards'

import itemdata from './../../public/items.json'

function BasicCard() {
    return (
        <>
            <section className='h-auto w-full bg-amber-100 '>
                <div>
                    <h1>Offer List</h1>
                    <p>Lorem ipsum dolor sit amet consectenisi error minima explicabo ex.</p>
                </div>
                <div className='grid grid-cols-4 gap-4 mt-10 mb-10 ml-10 mr-10'>
                    {
                        itemdata.map(item => {
                            return (
                                <Cards
                                key={item.id} 
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
                                />)
                        })
                    }

                </div>



            </section>

        </>
    )
}

export default BasicCard
