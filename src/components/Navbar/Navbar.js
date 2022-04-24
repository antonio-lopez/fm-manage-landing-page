import logo from '../../images/logo.svg';
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='relative container mx-auto p-6'>
      <div className='flex items-center justify-between'>
        {/* logo */}
        <div className='pt-2'>
          <img src={logo} alt='logo' />
        </div>
        {/* menu items */}
        <div className='hidden md:flex space-x-6'>
          <a href='/#' className='hover:text-darkGrayishBlue'>
            Pricing
          </a>
          <a href='/#' className='hover:text-darkGrayishBlue'>
            Product
          </a>
          <a href='/#' className='hover:text-darkGrayishBlue'>
            About Us
          </a>
          <a href='/#' className='hover:text-darkGrayishBlue'>
            Careers
          </a>
          <a href='/#' className='hover:text-darkGrayishBlue'>
            Community
          </a>
        </div>
        {/* button */}
        <a
          href='/#'
          className='hidden shadow-lg shadow-brightRedLight md:block  p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight'
        >
          Get Started
        </a>

        {/* hamburger icon */}
        <button
          onClick={() => setIsOpen((open) => !open)}
          className={`${
            isOpen ? 'open' : ''
          } block hamburger md:hidden focus:outline-none`}
        >
          <span className='hamburger-top'></span>
          <span className='hamburger-middle'></span>
          <span className='hamburger-bottom'></span>
        </button>
      </div>

      {/* mobile menu */}
      <div className='md:hidden'>
        {/* <div className='absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'> */}
        <div
          className={`absolute flex-col items-center ${
            isOpen ? 'flex' : 'hidden'
          } self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}
        >
          <a href='/#'>Pricing</a>
          <a href='/#'>Product</a>
          <a href='/#'>About Us</a>
          <a href='/#'>Community</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
