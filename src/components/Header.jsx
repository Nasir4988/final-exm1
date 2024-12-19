import React, { useState } from 'react';
import Container from "./Container";
import Flex from "./Flex";
import logo from "../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className='bg-slate-200'>
      <Container classname="">
        <Flex className="justify-between items-center py-4">
          <div className='w-[35%] cursor-pointer'>
            <img src={logo} alt="Logo" className=" lg:w-hidden h-auto" />
          </div>
          <div className='w-[65%] flex justify-end items-center'>
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className='lg:hidden block text-xl text-[#262626]'>
              <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>

            {/* Navigation Menu */}
            <ul className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} lg:static absolute right-0 top-[60px] lg:top-0 bg-slate-200 lg:bg-transparent w-full lg:w-auto px-6 py-4 lg:p-0 duration-300 ease-in-out`}>
              <li className='font-sans font-semibold text-[18px] text-[#262626] cursor-pointer duration-300 ease-in-out hover:text-blue-400 text-center py-2 flex'>
                Home
              </li>
              <li className='font-sans font-bold text-[18px] text-[#262626] cursor-pointer duration-300 ease-in-out hover:text-blue-400 text-center py-2 flex'>
                About
              </li>
              <li className='font-sans font-bold text-[18px] text-[#262626] cursor-pointer duration-300 ease-in-out hover:text-blue-400 text-center py-2 flex'>
                Service
              </li>
              <li className='font-sans font-bold text-[18px] text-[#0c0606] cursor-pointer duration-300 ease-in-out hover:text-blue-400 text-center py-2 flex'>
                Portfolio
              </li>
              <li className='font-sans font-bold text-[18px] text-[#262626] cursor-pointer duration-300 ease-in-out hover:text-blue-400 text-center py-2 flex'>
                Price
              </li>
              <li className='font-sans font-bold text-[18px] text-[#262626] cursor-pointer duration-300 ease-in-out hover:text-blue-400 text-center py-2 flex'>
                Blog
              </li>
              <div className='pt-1'>
                <li className='text-[18px] font-sans text-black font-semibold hover:text-[#282828] duration-300 ease-in-out border-rounded-full-2 hover:rounded-full py-1 px-4 hover:bg-[#FF7628] flex cursor-pointer'>
                  Contact Us
                </li>
              </div>
            </ul>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Header;
