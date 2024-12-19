import React from 'react'
import Container from './Container'
import ser from "../assets/ser.png"
import str from "../assets/str.png"
import soc from "../assets/soc.png"
import soc2 from "../assets/soc2.png"

const Service = () => {
  return (
    <section className='bg-slate-200 py-12'>
        <Container>
            <div className='text-center'>
                {/* Service Heading */}
                <div className='mb-6'>
                    <img src={ser} alt="Services" className="mx-auto w-20 md:w-32 lg:w-40" />
                </div>
                <div>
                    <h2 className='text-[#192239] text-[36px] sm:text-[48px] font-sans font-extrabold'>Our Services</h2>
                </div>
                <div>
                    <p className='text-[16px] sm:text-[18px] font-sans text-[#6C7D93] mt-4'>We have been providing great flooring solutions service.</p>
                </div>
            </div>

            {/* Service Boxes */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12'>
                {/* Marketing Strategy Box */}
                <div className='bg-[#6C7D93] rounded-lg p-6 text-center'>
                    <img className='mx-auto w-20 mb-4' src={str} alt="Marketing Strategy" />
                    <h4 className='font-sans font-semibold text-[22px] text-white mb-4'>MARKETING STRATEGY</h4>
                    <p className='text-[16px] text-[#262626] mb-4'>Social Media has changed the way we interact & do business while creating a new avenue.</p>
                    <button className='font-bold font-sans text-[16px] text-[#202427] border rounded-full py-2 px-4 bg-white hover:bg-green-500 hover:text-white'>
                        Read more
                    </button>
                </div>
                
                {/* Social Marketing Box */}
                <div className='bg-[#539CF0] rounded-lg p-6 text-center'>
                    <img className='mx-auto w-20 mb-4' src={soc} alt="Social Marketing" />
                    <h4 className='font-sans font-semibold text-[22px] text-white mb-4'>Social Marketing</h4>
                    <p className='text-[16px] text-[#262626] mb-4'>Social Media has changed the way we interact & do business while creating a new avenue.</p>
                    <button className='font-bold font-sans text-[16px] text-[#202427] border rounded-full py-2 px-4 bg-white hover:bg-green-500 hover:text-white'>
                        Read more
                    </button>
                </div>

                {/* Content Marketing Box */}
                <div className='bg-[#FBF1EC] rounded-lg p-6 text-center'>
                    <img className='mx-auto w-20 mb-4' src={soc2} alt="Content Marketing" />
                    <h4 className='font-sans font-semibold text-[22px] text-[#192239] mb-4'>Content Marketing</h4>
                    <p className='text-[16px] text-[#262626] mb-4'>Content Marketing is the other fold of online advertisement. If you are looking to build your brand.</p>
                    <button className='font-bold font-sans text-[16px] text-[#202427] border rounded-full py-2 px-4 bg-white hover:bg-green-500 hover:text-white'>
                        Read more
                    </button>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Service;
