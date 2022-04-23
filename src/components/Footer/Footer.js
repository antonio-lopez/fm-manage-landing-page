import logo from '../../images/logo-white.svg';
import facebook from '../../images/icon-facebook.svg';
import youtube from '../../images/icon-youtube.svg';
import twitter from '../../images/icon-twitter.svg';
import pinterest from '../../images/icon-pinterest.svg';
import instagram from '../../images/icon-instagram.svg';

const Footer = () => {
  return (
    <footer className='bg-veryDarkBlue'>
      <div className='container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>
        {/* logo and social links container */}
        <div className='flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start'>
          <div className='mx-auto my-6 text-center text-white md:hidden'>
            Copyright &copy; 2022, All Rights Reserved
          </div>
          {/* logo*/}
          <div>
            <img src={logo} className='h-8' alt='logo' />
          </div>
          {/* social links container */}
          <div className='flex justify-center space-x-4'>
            <a href='#'>
              <img src={facebook} alt='facebook logo' />
            </a>
            <a href='#'>
              <img src={youtube} alt='youtube logo' />
            </a>
            <a href='#'>
              <img src={twitter} alt='twitter logo' />
            </a>
            <a href='#'>
              <img src={pinterest} alt='pinterest logo' />
            </a>
            <a href='#'>
              <img src={instagram} alt='instagram logo' />
            </a>
          </div>
        </div>

        {/* list container */}
        <div className='flex justify-around space-x-32'>
          <div className='flex flex-col space-y-3 text-white'>
            <a href='#' className='hover:text-brightRed'>
              Home
            </a>
            <a href='#' className='hover:text-brightRed'>
              Pricing
            </a>
            <a href='#' className='hover:text-brightRed'>
              Products
            </a>
            <a href='#' className='hover:text-brightRed'>
              About
            </a>
          </div>
          <div className='flex flex-col space-y-3 text-white'>
            <a href='#' className='hover:text-brightRed'>
              Careers
            </a>
            <a href='#' className='hover:text-brightRed'>
              Community
            </a>
            <a href='#' className='hover:text-brightRed'>
              Privacy Policy
            </a>
          </div>
        </div>

        {/* input container */}
        <div className='flex flex-col justify-between'>
          <form>
            <div className='flex space-x-3'>
              <input
                type='text'
                className='flex-1 px-4 rounded-full focus:outline-none'
                placeholder='Update in your inbox'
              />
              <button className='px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none'>
                Go
              </button>
            </div>
          </form>

          {/* copyright */}
          <div className='hidden text-white md:block'>
            Copyright &copy; 2022, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
