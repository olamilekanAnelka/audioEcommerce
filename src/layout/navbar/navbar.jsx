import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'


{/** the navbar component */}
const Navbar = () => {
  return (
    <section className="bg-black h-auto">
      {/** the navbar container */}
        <div className="container h-20 text-white flex
          justify-between items-center border-b-2
           border-white ">
            {/**the navbar brand */}
           <a href="#" className='font-medium'>audiophile</a>

            {/**the navbar ul  */}
            <ul className="justify-between md:flex hidden">
                <li><a href="" className='px-2'>HOME</a></li>
                <li><a href="" className='px-2'>HEADPHONES</a></li>
                <li><a href="" className='px-2'>SPEAKERS</a></li>
                <li><a href="" className='px-2'>EARPHONES</a></li>
            </ul>

         {/**the navbar cart */}
          <a href=""> <AiOutlineShoppingCart /></a>
        </div>
    </section>
  )
}

export default Navbar
