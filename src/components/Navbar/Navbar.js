import logo from '../../images/logo.svg';

const Navbar = () => {
  return (
    <nav className='relative container mx-auto p-6'>
      <div className='flex items-center justify-between'>
        {/* logo */}
        <div className='pt-2'>
          <img src={logo} alt='logo' />
        </div>
        {/* menu items */}
        <div className='hidden md:flex space-x-6'>
          <a href='#' className='hover:text-darkGrayishBlue'>
            Pricing
          </a>
          <a href='#' className='hover:text-darkGrayishBlue'>
            Product
          </a>
          <a href='#' className='hover:text-darkGrayishBlue'>
            About Us
          </a>
          <a href='#' className='hover:text-darkGrayishBlue'>
            Careers
          </a>
          <a href='#' className='hover:text-darkGrayishBlue'>
            Community
          </a>
        </div>
        {/* button */}
        <a
          href='#'
          className='hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight'
        >
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
