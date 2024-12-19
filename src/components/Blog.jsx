import React from 'react';
import Container from './Container';
import img1 from "../assets/img1.png";
import blg from "../assets/blg.png";
import blg1 from "../assets/blg1.png";
import blg3 from "../assets/blg3.png";

const Blog = () => {
    return (
        <section className='bg-slate-200 py-12'>
            <Container>
                <div className='text-center'>
                    <div className='mb-8'>
                        <div className='flex justify-center'>
                            <img src={img1} alt="Blog Icon" className="w-20 h-20" />
                        </div>
                        <h2 className='text-[#192239] text-[32px] md:text-[48px] font-sans font-extrabold'>
                            Our Latest Blog.
                        </h2>
                        <p className='font-serif text-[16px] md:text-[18px] text-[#192239] mt-4'>
                            We provide digital experience services to startups
                        </p>
                        <p className='font-serif text-[16px] md:text-[18px] text-[#192239]'>
                            and small businesses.
                        </p>
                    </div>

                    {/* Image Grid */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                        <div className='w-full rounded-lg'>
                            <img className='w-full h-[250px] object-cover rounded-lg' src={blg} alt="Blog Image 1" />
                        </div>
                        <div className='w-full rounded-lg'>
                            <img className='w-full h-[250px] object-cover rounded-lg' src={blg1} alt="Blog Image 2" />
                        </div>
                        <div className='w-full rounded-lg'>
                            <img className='w-full h-[250px] object-cover rounded-lg' src={blg3} alt="Blog Image 3" />
                        </div>
                    </div>

                    {/* Blog Titles and Buttons */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8'>
                        <div className='w-full pt-4'>
                            <h4 className='font-sans text-[24px] text-[#413F45]'>How to Be Ahead of Stock Changes</h4>
                            <h6 className='font-sans text-[16px] md:text-[18px] text-[#413F45]'>By John - 5 Comments</h6>
                            <button className='font-bold font-sans text-[16px] text-[#202427] border rounded-md py-2 px-4 mt-4 duration-300 ease-in-out hover:bg-green-500 hover:text-white'>
                                Read more
                            </button>
                        </div>
                        <div className='w-full pt-4'>
                            <h4 className='font-sans text-[24px] text-[#413F45]'>How to Be Ahead of Stock Changes</h4>
                            <h6 className='font-sans text-[16px] md:text-[18px] text-[#413F45]'>By John - 5 Comments</h6>
                            <button className='font-bold font-sans text-[16px] text-[#202427] border rounded-md py-2 px-4 mt-4 duration-300 ease-in-out hover:bg-green-500 hover:text-white'>
                                Read more
                            </button>
                        </div>
                        <div className='w-full pt-4'>
                            <h4 className='font-sans text-[24px] text-[#413F45]'>How to Be Ahead of Stock Changes</h4>
                            <h6 className='font-sans text-[16px] md:text-[18px] text-[#413F45]'>By John - 5 Comments</h6>
                            <button className='font-bold font-sans text-[16px] text-[#202427] border rounded-md py-2 px-4 mt-4 duration-300 ease-in-out hover:bg-green-500 hover:text-white'>
                                Read more
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Blog;
