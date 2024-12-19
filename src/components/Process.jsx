import React from 'react'
import Container from './Container'
import img1 from "../assets/img1.png"
import wim1 from "../assets/wim1.png"
import wim2 from "../assets/wim2.png"
import wi6 from "../assets/wi6.png"

const Process = () => {
  return (
    <section className='bg-slate-200 py-12 md:h-[1400px]'>
        <Container>
            <div>
                {/* Title Section */}
                <div className='text-center'>
                    <div className='pl-0 md:pl-[45%]'>
                        <img src={img1} alt="Process Image" className="mx-auto"/>
                    </div>
                    <h2 className='text-[#192239] text-[32px] md:text-[48px] font-sans font-extrabold mt-4'>
                        Our creative process.
                    </h2>
                    <p className='font-serif text-[16px] md:text-[18px] text-[#192239] text-center mt-2'>
                        We provide digital experience services to startups
                    </p>
                    <p className='font-serif text-[16px] md:text-[18px] text-[#192239] text-center'>
                        and small businesses.
                    </p>
                </div>

                {/* Step 1 */}
                <div className='flex flex-col md:flex-row pt-8 md:pt-[50px]'>
                    <div className='w-full md:w-1/2'>
                        <div className='w-full md:w-[400px] h-[200px] bg-[#A1D6CB] rounded-[5%] p-4'>
                            <h5 className='text-[18px] text-[#202427] font-serif font-bold'>Step-1</h5>
                            <h3 className='text-[24px] md:text-[30px] text-[#202427] font-serif font-semibold'>
                                Global SEO Research
                            </h3>
                            <p className='text-[16px] md:text-[18px] text-[#202427] font-serif'>
                                Practical tools and features make it easier to build and manage your site.
                            </p>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 pt-4 md:pt-0'>
                        <img src={wim1} alt="Step 1 Image" className='w-full h-auto'/>
                    </div>
                </div>

                {/* Step 2 */}
                <div className='flex flex-col md:flex-row pt-8'>
                    <div className='w-full md:w-1/2'>
                        <div className='w-full md:w-[400px] h-[350px]'>
                            <img src={wim2} alt="Step 2 Image" className='w-full h-auto'/>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 pt-4 md:pt-0'>
                        <div className='w-full md:w-[400px] h-[200px] bg-[#6C7D93] rounded-[5%] p-4'>
                            <h5 className='text-[18px] text-[#202427] font-serif font-bold'>Step-2</h5>
                            <h3 className='text-[24px] md:text-[27px] text-[#202427] font-serif font-semibold'>
                                Social media integration
                            </h3>
                            <p className='text-[16px] md:text-[18px] text-[#202427] font-serif'>
                                Practical tools and features make it easier to build and manage your site.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className='flex flex-col md:flex-row pt-8'>
                    <div className='w-full md:w-1/2'>
                        <div className='w-full md:w-[400px] h-[200px] bg-[#FBF1EC] rounded-[5%] p-4'>
                            <h5 className='text-[18px] text-[#202427] font-serif font-bold'>Step-3</h5>
                            <h3 className='text-[24px] md:text-[27px] text-[#202427] font-serif font-semibold'>
                                Launching the Application
                            </h3>
                            <p className='text-[16px] md:text-[18px] text-[#202427] font-serif'>
                                Practical tools and features make it easier to build and manage your site.
                            </p>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 pt-4 md:pt-0'>
                        <div className='w-full md:w-[400px] h-[350px]'>
                            <img src={wi6} alt="Step 3 Image" className='w-full h-auto'/>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Process;
