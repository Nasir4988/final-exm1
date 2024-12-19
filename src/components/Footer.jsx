import React from 'react';
import Container from './Container';
import logo from "../assets/logo.png";

const Footer = () => {
    return (
        <section className='bg-slate-200 py-12'>
            <Container>
                <div className='flex flex-wrap justify-between'>
                    {/* Logo and Description Section */}
                    <div className='w-full md:w-1/3 text-center md:text-left'>
                        <img src={logo} alt="Logo" className='pb-4 mx-auto md:mx-0' />
                        <p className='text-[#6C7D93] text-[16px] md:text-[18px]'>
                            Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.
                        </p>
                    </div>

                    {/* Features Section */}
                    <div className='w-full sm:w-1/3 md:w-1/4 mt-6 md:mt-0'>
                        <h4 className='text-[#413F45] text-[20px] font-sans font-semibold mb-4 text-center md:text-left'>Features</h4>
                        <ul className="text-center md:text-left">
                            <li className='text-[#6C7D93] font-sans text-[17px] py-2 hover:text-blue-400 cursor-pointer'>Home</li>
                            <li className='text-[#6C7D93] font-sans text-[17px] py-2 hover:text-blue-400 cursor-pointer'>About</li>
                            <li className='text-[#6C7D93] font-sans text-[17px] py-2 hover:text-blue-400 cursor-pointer'>Benefit</li>
                            <li className='text-[#6C7D93] font-sans text-[17px] py-2 hover:text-blue-400 cursor-pointer'>Price</li>
                            <li className='text-[#6C7D93] font-sans text-[17px] py-2 hover:text-blue-400 cursor-pointer'>Blog</li>
                        </ul>
                    </div>

                    {/* Products Section */}
                    <div className='w-full sm:w-1/3 md:w-1/4 mt-6 md:mt-0'>
                        <h4 className='text-[#413F45] text-[20px] font-sans font-semibold mb-4 text-center md:text-left'>Products</h4>
                        <ul className="text-center md:text-left">
                            <li className='text-[#6C7D93] font-sans text-[17px] py-2 hover:text-blue-400 cursor-pointer'>Task Management</li>
                            <li className='text-[#6C7D93] font-sans text-[17px] py-2 hover:text-blue-400 cursor-pointer'>Company Growth</li>
                            <li className='text-[#6C7D93] font-sans text-[17px] py-2 hover:text-blue-400 cursor-pointer'>Time Tracking</li>
                        </ul>
                    </div>

                    {/* Support Section */}
                    <div className='w-full sm:w-1/3 md:w-1/4 mt-6 md:mt-0'>
                        <h4 className='text-[#413F45] text-[20px] font-sans font-semibold mb-4 text-center md:text-left'>Support</h4>
                        <ul className="text-center md:text-left">
                            <li className='text-[#6C7D93] font-sans text-[17px] py-2 hover:text-blue-400 cursor-pointer'>Customer Service</li>
                            <li className='text-[#6C7D93] font-sans text-[17px] py-2 hover:text-blue-400 cursor-pointer'>Accessibility</li>
                            <li className='text-[#6C7D93] font-sans text-[17px] py-2 hover:text-blue-400 cursor-pointer'>Contact Us</li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className='flex flex-wrap justify-between items-center mt-8'>
                    <h6 className='text-[18px] text-[#6C7D93] font-serif'>@2024 Innovate. All rights reserved.</h6>
                    <div className='flex space-x-6'>
                        <p className='text-[18px] text-[#6C7D93] font-serif cursor-pointer'>Privacy Policy</p>
                        <p className='text-[18px] text-[#6C7D93] font-serif cursor-pointer'>Terms & Conditions</p>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Footer;
