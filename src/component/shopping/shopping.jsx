import React from 'react';

import {BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs';

const Shopping = () => {
  return (
    <>
    {/**the shopping component  */}

    {/**the go back button */}
   <section>
    <div className="container">
        <a href="#"> Go back</a>
    </div>
   </section>
     
     {/**the shopping header */}
   <section>
    <div className="container flex  py-20 bg-white" >

       {/** the header of the shopping page  note that this code will only active on lg screen blobked on tab and mobile screen */}
         <div className='w-1/2 h-60vh hidden lg:block'>
           <img className="h-full"
           src="https://res.cloudinary.com/ilove2support/image/upload/v1679926286/ecommerce/earphone_kvsxmd.png"/>

         </div>
         <div className="w-1/2 h-60vh flex flex-col justify-center items-start hidden lg:block">
         <p className='text-sm font-thin text-appbrown my-2'>n e w <span className='px-2'>p r o d u c t</span></p>
         <h1 className='text-5xl overflow-hidden'>XX99 MARK II<br/> HEADPHONES</h1>
         <p className='w-2/3 font-normal text-base my-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Tempora voluptatem repellendus ducimus delectus 
             iste pariatur quaerat animi nostrum perspiciatis ut, deserunt voluptates 
            exercitationem necessitatibus temporibus aut libero velit cum nihil?</p>
        <p className='font-bold my-3'>$ 2,999</p>

        <div className='flex '>
            <button className='flex justify-between p-5 bg-[#bababa] w-40 mr-2 '><BsArrowLeftShort />1 <BsArrowRightShort /></button>
            <button className='p-5 w-40 bg-appbrown text-white ml-2'>ADD TO CART</button>
        </div>
         </div>

          {/**the header code for tab and mobile  */}
          {/** the md__header same as the home page heder some css style there work here */}
        <div className='md__header  text-white '>
        <p className='text-sm font-thin overflow-hidden text-appbrown my-2'>n e w <span className='px-2'>p r o d u c t</span></p>
        <h1 className='text-5xl overflow-hidden'>XX99 MARK II<br/> HEADPHONES</h1>
        <p className='w-2/3 font-normal overflow-hidden text-base my-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Tempora voluptatem repellendus ducimus delectus 
             iste pariatur quaerat animi nostrum perspiciatis ut, deserunt voluptates 
            exercitationem necessitatibus temporibus aut libero velit cum nihil</p>
            <p className='font-bold my-3'>$ 2,999</p>
            <div className='flex '>
            <button className='flex justify-between p-5 bg-[#bababa] text-black w-40 mr-2 '><BsArrowLeftShort />1 <BsArrowRightShort /></button>
            <button className='p-5 w-40 bg-appbrown text-white ml-2'>ADD TO CART</button>
            </div>

        </div>
        
    </div>
   </section>

   {/**the features sextion */}
   <section>
    <div className="container flex flex-col  text-center lg:text-left   lg:flex-row ">
      <div className='w-full lg:w-1/2 lg:h-50vh'>
        <h1 className='font-semibold overflow-hidden text-5xl my-4'>FEATURES</h1>
        <p className='mr-2 mb-2 overflow-hidden'>Features a genuine leather head strap and premium earcups.
           these headphones deliver superior comfort for those who
            like to enjoy endless listening .it includes intultive
             controls designed for any situation. Whether you're
              taking a business call or just in your own personal space, the auto on/off 
          and pause features ensure that you'll never miss a beat</p>
        <p>Features a genuine leather head strap and premium earcups. 
          these headphones deliver superior comfort for those who like
           to enjoy endless listening .it includes intultive controls
            designed for any situation. Whether you're taking a business
             call or just in your own personal space, the auto
           on/off and pause features ensure that you'll never miss a beat.</p>
      </div>

      <div className='w-full lg:w-1/2 lg:h-50vh flex flex-col lg:items-center'>
        <h1 className='font-semibold overflow-hidden text-5xl mb-4'>IN THE BOX</h1>
        <ul>
          <li><span className='text-appbrown pr-3 font-medium'>1x</span>Headphone Unit</li>
          <li><span className='text-appbrown pr-3 font-medium'>2x</span>Replacement Earcups</li>
          <li><span className='text-appbrown pr-3 font-medium'>1x</span>User Manual</li>
          <li><span className='text-appbrown pr-3 font-medium'>1x</span>3.5mm 5m Audio Cable</li>
          <li><span className='text-appbrown pr-3 font-medium'>1x</span>Travel Bag</li>
        </ul>
      </div>
    </div>
   </section>


{/**the gallery part note that this will only display on tab and bigger screen */}
   <section>
    <div className='container hidden  md:flex w-full mr-4 overflow-hidden pb-10 '>
      <div className='w-2/5  h-80vh overflow-hidden'>
      <div className="h-1/2 w-full mb-3 bg-[url('https://res.cloudinary.com/ilove2support/image/upload/v1679926286/ecommerce/customer_n2xw6g.png')]
      bg-cover"></div>
        <div className="h-1/2 w-full mt-3 bg-[url('https://res.cloudinary.com/ilove2support/image/upload/v1679926286/ecommerce/customer_n2xw6g.png')]
      bg-cover"></div>
         

      </div>
      <div className="w-3/5  h-80vh ml-3
      bg-[url('https://res.cloudinary.com/ilove2support/image/upload/v1679926286/ecommerce/earphone_kvsxmd.png')]
      bg-cover">
      </div>
    </div>
   </section>

   {/**the gallery section the mobile  */}
   <section>
    <div className="container flex py-10 flex-col md:hidden ">
    <div className=' h-30vh mb-2 flex overflow-hidden'>
      <div className="h-full w-full mr-1  bg-[url('https://res.cloudinary.com/ilove2support/image/upload/v1679926286/ecommerce/customer_n2xw6g.png')]
      bg-cover"></div>
        <div className="h-full w-full ml-1  bg-[url('https://res.cloudinary.com/ilove2support/image/upload/v1679926286/ecommerce/customer_n2xw6g.png')]
      bg-cover"></div>
         

      </div>
      <div className="  h-30vh 
      bg-[url('https://res.cloudinary.com/ilove2support/image/upload/v1679926286/ecommerce/earphone_kvsxmd.png')]
      bg-cover">
      </div>
    </div>
   </section>

   
   </>
  )
}

export default Shopping;
