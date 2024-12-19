import React from 'react'
import Container from './Container'
import img1 from "../assets/img1.png"
import wi6 from "../assets/wi6.png"
import wim2 from "../assets/wim2.png"
import wi9 from "../assets/wi9.png"
import wim1 from "../assets/wim1.png"
import wi3 from "../assets/wi3.jpeg"
import wim6 from "../assets/wim6.jpeg"

const Work = () => {
  return (
    <section className='bg-slate-200 py-12 md:h-[850px]'>
        <Container>
            <div className='text-center'>
                <div className='pl-0 md:pl-[45%] pt-[60px]'>
                    <img src={img1} alt="Work Showcase" className="mx-auto"/>
                </div>
                <div className='text-[#192239] text-[32px] md:text-[48px] font-sans font-extrabold'>
                    <h2>Work Showcase</h2>
                </div>
                <div className='mt-6'>
                    <div className='flex justify-center gap-[30px] flex-wrap'>
                        <h4 className='text-[#6C7D93] text-[18px] md:text-[24px] font-sans font-semibold cursor-pointer duration-300 ease-in-out hover:text-blue-400'>All</h4>
                        <h4 className='text-[#6C7D93] text-[18px] md:text-[24px] font-sans font-semibold cursor-pointer duration-300 ease-in-out hover:text-blue-400'>Digital Mkt</h4>
                        <h4 className='text-[#6C7D93] text-[18px] md:text-[24px] font-sans font-semibold cursor-pointer duration-300 ease-in-out hover:text-blue-400'>Branding</h4>
                        <h4 className='text-[#6C7D93] text-[18px] md:text-[24px] font-sans font-semibold cursor-pointer duration-300 ease-in-out hover:text-blue-400'>Content Mkt</h4>
                        <h4 className='text-[#6C7D93] text-[18px] md:text-[24px] font-sans font-semibold cursor-pointer duration-300 ease-in-out hover:text-blue-400'>Social Media Mkt</h4>
                    </div>
                </div>

                {/* Image Grid */}
                <div className='pt-[30px]'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-[30px]'>
                        <div className='w-full'>
                            <img className='w-full h-auto' src={wi6} alt="Work Image 1" />
                        </div>
                        <div className='w-full'>
                            <img className='w-full h-auto' src={wim2} alt="Work Image 2" />
                        </div>
                        <div className='w-full'>
                           <img className='w-full h-auto' src={wi9} alt="Work Image 3" />
                        </div>
                    </div>
                </div>

                <div className='pt-[30px]'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-[30px]'>
                        <div className='w-full'>
                            <img className='w-full h-auto' src={wim6} alt="Work Image 4" />
                        </div>
                        <div className='w-full'>
                            <img className='w-full h-auto' src={wi3} alt="Work Image 5" />
                        </div>
                        <div className='w-full'>
                           <img className='w-full h-auto' src={wim1} alt="Work Image 6" />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Work;
