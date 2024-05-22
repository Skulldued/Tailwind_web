import React from 'react'
import satelite from "../../assets/satelite1.jpg";
const Banner = () => {
  return (
    <div className='bg-black  text-white w-full pb-12 relative z-50'>
     <div className=" container ">
      <div className='grid sm:grid-cols-2 grid-cols-1 gap-4 items-center'>
           <div className='img flex justify-center'>
             <img data-aos="zoom-in" src={satelite} className='w-[450px]' alt="" />
           </div>
           <div className='text-white space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800'>
              <h6  data-aos="fade-up" data-aos-delay="300" className='text-sky-500 uppercase'>Our Mission</h6>
              <h1 data-aos="fade-up" data-aos-delay="500" className='text-5xl '>RapidCast</h1>
              <p data-aos="fade-up" data-aos-delay="700" className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, suscipit vero. Fuga mollitia necessitatibus soluta odit aperiam magnam dis sint accusamus in dolorum necFuga mollitia necessitatibus soluta odit aperiam magnam dis sint accusamus in dolorum necessitatibus excepturi!</p>
              <button data-aos="fade-up" data-aos-delay="800" className="primary-button">Learn More</button>
           </div>
      </div>
      </div> 
    </div>
  )
}

export default Banner
