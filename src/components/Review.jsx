import React from 'react';
import Container from './Container';
import img1 from "../assets/img1.png";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import jan from "../assets/jan.png";
import ale from "../assets/ale.png";

const Review = () => {
    return (
        <section className='bg-slate-200 py-12'>
            <Container>
                <div className='text-center'>
                    <div className='flex justify-center md:justify-start'>
                        <div className='w-full md:w-1/3 px-4'>
                            <div className='w-full h-[330px]'>
                                <img src={img1} alt="Client Review" className='w-full h-auto' />
                                <h2 className='text-[#192239] text-[32px] md:text-[48px] font-sans font-extrabold mt-4'>
                                    Client Review
                                </h2>
                                <p className='text-[16px] md:text-[18px] text-[#6C7D93] font-serif mt-2'>
                                    People use digital devices instead of visiting physical shops, digital marketing campaigns are becoming more prevalent and efficient.
                                </p>
                                <div className='flex justify-center md:justify-start mt-4'>
                                    <div className='text-[25px] hover:text-[#FF7628] cursor-pointer mx-2'>
                                        <MdOutlineKeyboardArrowLeft />
                                    </div>
                                    <div className='text-[25px] hover:text-[#FF7628] cursor-pointer mx-2'>
                                        <MdOutlineKeyboardArrowRight />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Reviews Section */}
                        <div className='w-full md:w-1/3 px-4 mt-8 md:mt-0'>
                            <div className='w-full h-[300px] bg-blue-200 rounded-[5%] p-4'>
                                <p className='text-[16px] md:text-[18px] text-[#6C7D93] font-serif'>
                                    Content Marketing is the other fold of online advertisement. If you are looking to build, digital marketing campaigns are becoming more prevalent and efficient.
                                </p>
                                <div className='flex mt-4'>
                                    <img className='w-[60px] h-[60px] rounded-full' src={jan} alt="Jane Cooper" />
                                    <div className='pl-4'>
                                        <h4 className='text-[20px] text-[#202427] font-semibold'>Jane Cooper</h4>
                                        <p className='text-[16px] text-[#202427]'>Fashion Designer</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='w-full md:w-1/3 px-4 mt-8 md:mt-0'>
                            <div className='w-full h-[300px] bg-green-200 rounded-[5%] p-4'>
                                <p className='text-[16px] md:text-[18px] text-[#6C7D93] font-serif'>
                                    Content Marketing is the other fold of online advertisement. If you are looking to build, digital marketing campaigns are becoming more prevalent and efficient.
                                </p>
                                <div className='flex mt-4'>
                                    <img className='w-[60px] h-[60px] rounded-full' src={ale} alt="Eleanor Pena" />
                                    <div className='pl-4'>
                                        <h4 className='text-[20px] text-[#202427] font-semibold'>Eleanor Pena</h4>
                                        <p className='text-[16px] text-[#202427]'>Marketing Specialist</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Review;
