import React from 'react'
import Container from './Container'
import wimg from "../assets/wimg.png"
import img1 from "../assets/img1.png"
import pat from "../assets/pat.png"

const Weare = () => {
  return (
    <section className='bg-slate-200 py-12 md:h-[700px] relative'>
        <Container>
            <div className='flex flex-col md:flex-row justify-between items-center'>
                {/* Left Image */}
                <div className='w-full md:w-1/2 mb-6 md:mb-0'>
                  <img className='w-full h-auto max-w-[500px] mx-auto' src={wimg} alt="Who We Are" />
                </div>

                {/* Right Content */}
                <div className='w-full md:w-1/2 px-4 md:px-10'>
                    <div className='pl-0 md:pl-12'>
                        <img className='mx-auto md:mx-0' src={img1} alt="Logo" />
                        <h2 className='pt-6 text-[32px] md:text-[48px] font-sans font-extrabold text-[#192239] text-center md:text-left'>
                            Who We Are
                        </h2>
                        <p className='text-[16px] md:text-[18px] font-serif font-regular text-[#6C7D93] text-center md:text-left'>
                            We are a Dhaka based Digital Communication Agency committed to creating an actionable strategy, online marketing & technology solution for our partners. As a multidisciplinary company, we operate as a unified team.
                        </p>
                        <p className='text-[#6C7D93] text-[12px] md:text-[14px] font-serif text-center md:text-left'>
                            Join the 10,000+ Companies Trusting Us
                        </p>
                    </div>
                </div>
            </div>
            {/* Positioning for Pat Image */}
            <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-16 md:-mb-24'>
                <img src={pat} alt="Pattern" className='max-w-[200px] md:max-w-[300px]' />
            </div>
        </Container>
    </section>
  )
}

export default Weare;
