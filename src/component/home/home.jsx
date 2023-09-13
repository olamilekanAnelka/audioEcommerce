import React from 'react'
import '../home/home.css'

import {IoIosArrowForward} from 'react-icons/io'

{/** the home component  */}
const Home = () => {
  return (
    <>
    <section className='bg-black  text-white'>
      <div className="container header__container flex flex-col">

        {/** the header of the home page  note that this code will only active on lg screen blobked on tab and mobile screen  */}
        {/** the first div for the content */}
        <div className='flex w-full bg-black'>
        <div className='w-1/2 flex flex-col overflow-hidden justify-center h-80vh bg-black pt-40 hidden lg:block'>
          <p className='text-sm font-thin text-gray-500 my-2'>n e w <span className='px-2'>p r o d u c t</span></p>
          <h1 className='text-7xl overflow-hidden'>XX99 MARK II HEADPHONES</h1>
          <p className='w-2/3 font-normal text-base my-4'>Experience natutal. life like audio and exceptional
            build quality made for the passionate music enthusiast.
          </p>

         <a href="" className='py-3 px-2 bg-appbrown '>SEE PRODUCT</a>
        </div>
        {/** the secong the img  */}
        <div className='w-1/2 hidden lg:block h-80vh overflow-hidden bg-black'>
          <img className='w-full mb-2'
          src='https://res.cloudinary.com/ilove2support/image/upload/v1679926286/ecommerce/earphone_kvsxmd.png' 
          alt='header img'/>
        </div>
         {/**the header code for tab and mobile  */}
        <div className='md__header '>
        <p className=''>n e w <span className='px-2'>p r o d u c t</span></p>
          <h1  className=' '>XX99 MARK II <br/> HEADPHONES</h1>
          <p className='w-2/3 text-xl'>Experience natutal. life like audio and exceptional
            build quality made for the passionate music enthusiast.
          </p>

         <a href="" className='py-3 px-2 m-6 bg-appbrown '>SEE PRODUCT</a>

        </div>
        </div>
        </div>
        {/**the end of the home page header */}

      
    </section>

    

    <section className='h-auto'>
  {/** the card/box for shopping below the home page header */}
  <div className='container 
  home__shopbox-container w-full py-20'>
    <div className="home__shopbox ">
      <img src='https://res.cloudinary.com/ilove2support/image/upload/v1679926285/ecommerce/headset1new_ttttfg.png' />
      <h3 className='text-2xl 
      overflow-hidden 
      font-semibold'>HEADPHONES</h3>
      <div className='flex'>
        <p>SHOP</p>
        <IoIosArrowForward className='text-appbrown 
        text-xl w-6 h-6' />
      </div>
    </div>

    <div className="home__shopbox">
      <img src='https://res.cloudinary.com/ilove2support/image/upload/v1679926286/ecommerce/speakernew_dg2rlj.png' />
      <h3 className='text-2xl 
      overflow-hidden 
      font-semibold'>SPEAKERS</h3>
      <div className='flex'>
        <p>SHOP</p>
        <IoIosArrowForward className='text-appbrown 
        text-xl w-6 h-6' />
      </div>
    </div>

    <div className="home__shopbox">
      <img src='https://res.cloudinary.com/ilove2support/image/upload/v1679926285/ecommerce/earbudnew_xkqaqy.png' />
      <h3 className='text-2xl 
      overflow-hidden 
      font-semibold'>EARPHONES</h3>
      <div className='flex'>
        <p>SHOP</p>
        <IoIosArrowForward className='text-appbrown 
        text-xl w-6 h-6' />
      </div>
    </div>
  </div>
</section>

  {/** the zx9 speaker section */}
  <section>
    <div className="zx9__container container bg-appbrown w-full flex flex-col md:flex-row">
     <div className='zx9__img-container w-full md:w-1/2 flex justify-center items-center'>
      <img 
      src='https://res.cloudinary.com/ilove2support/image/upload/v1679926286/ecommerce/bigspeakernew_rwzy1a.png' alt=''
      />
     </div>
     <div className='w-full md:w-1/2 flex flex-col justify-center items-center md:items-start'>
      <h1 className='text-7xl overflow-hidden font-semibold'>ZX9 <br/> SPEAKER</h1>
      <p className='zx9__p'>Lorem ipsum dolor sit amet consectetur
         adipisicing elit. Labore officia quas minima accusamus.
         </p>
     <button type='' className='w-auto h-auto  py-4 px-7 bg-black text-white'>
      SEE PRODUCT
     </button>
  
     </div>
    </div>
  </section>


  {/**the zx7 speaker section */}
  <section>
    <div className="zx7__container container flex flex-col md:flex-row bg-[#ECECEC] w-full">
      <div className='w-full md:w-1/2 flex flex-col justify-center items-center'>
        <h1 className='font-semibold text5xl my-4'>ZX7 SPEAKER</h1>
        <button className='h-auto w-auto py-4 px-7  bg-transparent border-solid border-2 border-black text-black  font-semibold'>SEE PRODUCT</button>
      </div>
      <div className='m-10'>
        <img 
        src="https://res.cloudinary.com/ilove2support/image/upload/v1679926286/ecommerce/tablespeaker_w5iufs.png" alt="" />
      </div>
    </div>
  </section>

  {/**yx1 earphones section */}
  <section>
    <div className="yx1__container container flex flex-col md:flex-row">
       <div className="yx1__card bg-black ">
        <img 
        className='w-full'
        src='https://res.cloudinary.com/ilove2support/image/upload/v1679926286/ecommerce/earbudblack_yhd3jv.png'
        alt='' />
       </div>
       <div className="yx1__card bg-gray-300 flex flex-col justify-center items-center">
       <h1 className='font-semibold text5xl my-4'>YX1 SPEAKER</h1>
        <button className='h-auto w-auto py-4 px-7  bg-transparent border-solid border-2 border-black text-black  font-semibold'>SEE PRODUCT</button>
       </div>
    </div>
  </section>

  <section>
    <div className="audio__gear-container container flex flex-col md:flex-row  ">
      <div className='w-full md:w-1/2 h-full flex flex-col justify-center '>
        <h1 className='overflow-hidden'>BRINGING YOU THE<br/>
         <span className='text-appbrown'>BEST</span> AUDIO GEAR
         </h1>
         <p className='overflow-hidden'>Located at the heart of New York City.Audiophile is the 
          premier store for high end headphones, earphones, speakers, 
          and audio accessories. We have a large showroom and luxury
           demonstration rooms available for you to browse and 
           experience a wide range of our products Stop by our 
           store to meet some of the fantastic people who make Audiophile the 
          best place to buy your portable audio equipment.</p>
      </div>
      <div className='audio__gear-img w-full md:w-1/2 h-full '>

      </div>
    </div>
  </section>




    </>
  )
}

export default Home
