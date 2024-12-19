import React from 'react'
import Container from './Container'
import img1 from "../assets/img1.png"
import man from "../assets/man.png"
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import twi from "../assets/twi.png"
import ins from "../assets/ins.png"
import fb from "../assets/fb.png"
import wat from "../assets/wat.png"

const Banner = () => {
  return (
    <section className='bg-slate-200 relative h-[600px] lg:h-[700px]'>
      <div className='absolute top-0 left-0 p-4'>
        <img src={man} alt="" className='lg:w-[60px] sm:w-[0px] md:w-[px]' />
      </div>

      <div className='absolute top-[400px] left-4 sm:left-8'>
        <img src={twi} alt="" className='w-[40px] sm:w-[50px] md:w-[60px]' />
      </div>

      <Container>
        <div className='flex lg:flex-row items-center justify-between'>
          <div className='w-full lg:w-2/4 text-center lg:text-left'>
            <div className='mb-4'>
              <img src={img1} alt="Banner Image" className='w-full h-auto' />
            </div>
            <div className='text-[40px] sm:text-[56px] lg:text-[72px] font-sans font-extrabold text-[#192239]'>
              <h2>We Are Digital</h2>
            </div>
            <div className='flex justify-center lg:justify-start text-[40px] sm:text-[56px] lg:text-[72px] font-sans font-extrabold text-[#FF7628]'>
              <h2>Marketing</h2>
              <h2 className='pl-2 text-[40px] sm:text-[56px] lg:text-[72px] font-sans font-extrabold text-[#192239]'>Agency</h2>
            </div>
            <p className='text-[#6C7D93] text-[16px] sm:text-[18px] lg:text-[20px] font-paprika mt-4'>
              Use customer data to build great and solid product experiences that convert. Digital marketing’s development has changed the way brands and businesses use technology for marketing.
            </p>
            <div className='pt-4'>
              <button className='text-[16px] sm:text-[18px] lg:text-[20px] font-sans text-[#192239] font-bold border border-black rounded-full hover:text-white duration-300 ease-in-out hover:border-none hover:rounded-full py-2 px-4 hover:bg-[#FF7628] cursor-pointer'>
                Get Free Quote
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className='w-full lg:w-2/4 relative'>
            <div className='absolute top-0 left-[10%] sm:left-[15%] lg:left-[20%] pt-4'>
              <img src={fb} alt="" className='w-[60px] sm:w-[80px] md:w-[100px]' />
            </div>
            <div className='absolute top-[80px] left-[20%] sm:left-[30%] lg:left-[40%]'>
              <img src={image1} alt="Image 1" className='w-[250px] sm:w-[300px] lg:w-[500px] h-auto' />
            </div>
            <div className='absolute top-[220px] left-[15%] sm:left-[25%] lg:left-[35%]'>
              <img src={image2} alt="Image 2" className='w-[200px] sm:w-[250px] lg:w-[330px] h-auto' />
            </div>
            <div className='absolute top-[400px] left-[25%] sm:left-[35%] lg:left-[40%]'>
              <img src={wat} alt="" className='w-[40px] sm:w-[50px] lg:w-[60px]' />
            </div>
            <div className='absolute top-[500px] right-[20px] sm:right-[30px] lg:right-[40px]'>
              <img src={ins} alt="" className='w-[40px] sm:w-[50px] lg:w-[60px]' />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Banner;
