import React from 'react'
import {BsFacebook, BsInstagram} from 'react-icons/bs'
import {TiSocialTwitter} from 'react-icons/ti'



const Footer = () => {
  return (
   <>
   {/** the footer component, for big screen NOTE- this code is hide on md and sm screen */}
    <section className='bg-black text-white  hidden md:block'>
      <div className="footer__container container ">
         <div className="footer__audiophile flex justify-between items-center h-20">
          <a href="#" className='text-5xl overflow-hidden'>audiophile</a>
          <ul className='flex my-2'>
            <li className='pl-3'>HOME</li>
            <li className='pl-3'>HEADPHONES</li>
            <li className='pl-3'>SPEAKERS</li>
            <li className='pl-3'>EARPHONES</li>
          </ul>
         </div>
         <div className='flex justify-between mb-10'>
          <p className='w-1/2'>Audiophile is an all in one stop to fulfil your audio needs.
             we're a small team of music lovers and sound specialists
              who are devoted to helping you get the most 
              out of personal audio. Come and visit 
            demo facility -we're open 7 days a week.</p>
            <div className='flex justify-end items-end'>
              <BsFacebook className='w-6 h-6 ml-3' />
              <BsInstagram className='w-6 h-6 ml-3'/>
              <TiSocialTwitter className='w-6 h-6 ml-3'/>
            </div>
         </div>
         <div>
          <p>copyright 2021. All Rights Reserved</p>
         </div>
      </div>
    </section>

    <section className='bg-black h-auto  md:hidden sm:hidde'>
      <div className="container pt-10 text-white text-center flex flex-col items-center justify-center ">
      <a href="#" className='text-5xl overflow-hidden'>audiophile</a>
      <ul className='my-2'>
            <li>HOME</li>
            <li>HEADPHONES</li>
            <li>SPEAKERS</li>
            <li>EARPHONES</li>
          </ul>
          <p className='w-3/4 my-2'>Audiophile is an all in one stop to fulfil your audio needs.
             we're a small team of music lovers and sound specialists
              who are devoted to helping you get the most 
              out of personal audio. Come and visit 
            demo facility -we're open 7 days a week.</p>
            <div className=''>
              <BsFacebook className='w-6 h-6 mt-3' />
              <BsInstagram className='w-6 h-6 mt-3'/>
              <TiSocialTwitter className='w-6 h-6 mt-3'/>
            </div>
            <p>copyright 2021. All Rights Reserved</p>
      </div>
    </section>
    </>
  )
}

export default Footer
