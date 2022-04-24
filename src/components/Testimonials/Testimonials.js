import avatarAnisha from '../../images/avatar-anisha.png';
import avatarAli from '../../images/avatar-ali.png';
import avatarRichard from '../../images/avatar-richard.png';
import avatarShanai from '../../images/avatar-shanai.png';
import 'flowbite';

const Testimonials = () => {
  return (
    <section>
      <div className='max-w-6xl px-5 mx-auto mt-32 text-center overflow-hidden'>
        {/* heading */}
        <h2 className='text-4xl font-bold text-center'>
          What's Different About Manage?
        </h2>
        {/* testimonial carousel */}
        <div id='indicators-carousel' class='relative' data-carousel='static'>
          <div class=' flex flex-col mt-24 h-48  md:flex-row  sm:h-64 xl:h-80 2xl:h-96'>
            {/* testimonial 1 */}
            <div
              data-carousel-item='active'
              className='flex flex-col items-center p-6 space-x-6 rounded-lg bg-veryLightGray duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10 md:w-1/2'
            >
              <img src={avatarAnisha} className='w-16 -mt-14' alt='' />
              <h5 className='text-lg font-bold'>Anisha Li</h5>
              <p className='text-sm text-darkGrayishBlue'>
                “Manage has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </div>
            {/* testimonial 2 */}
            <div
              data-carousel-item=''
              className='flex flex-col items-center p-6 space-x-6 rounded-lg bg-veryLightGray duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10 md:w-1/2'
            >
              <img src={avatarAli} className='w-16 -mt-14' alt='' />
              <h5 className='text-lg font-bold'>Ali Bravo</h5>
              <p className='text-sm text-darkGrayishBlue'>
                “We have been able to cancel so many other subscriptions since
                using Manage. There is no more cross-channel confusion and
                everyone is much more focused.”
              </p>
            </div>
            {/* testimonial 3 */}
            <div
              data-carousel-item=''
              className='flex flex-col items-center p-6 space-x-6 rounded-lg bg-veryLightGray duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10 md:w-1/2'
            >
              <img src={avatarRichard} className='w-16 -mt-14' alt='' />
              <h5 className='text-lg font-bold'>Richard Watts</h5>
              <p className='text-sm text-darkGrayishBlue'>
                “Manage has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </div>

            {/* testimonial 4 */}
            <div
              data-carousel-item=''
              className=' flex flex-col items-center p-6 space-x-6 rounded-lg bg-veryLightGray duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10 md:w-1/2'
            >
              <img src={avatarShanai} className='w-16 -mt-14' alt='' />
              <h5 className='text-lg font-bold'>Shani Gough</h5>
              <p className='text-sm text-darkGrayishBlue'>
                "Their software allows us to track, manage and collaborate on
                our projects from anywhere. It keeps the whole team in- sync
                without being intrusive."
              </p>
            </div>
          </div>

          {/* slider indicators */}
          <div class='flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2'>
            <button
              type='button'
              class='w-3 h-3 rounded-full border-2 border-brightRed bg-brightRed hover:bg-brightRed'
              aria-current='false'
              aria-label='Slide 1'
              data-carousel-slide-to='0'
            ></button>
            <button
              type='button'
              class='w-3 h-3 rounded-full border-2 border-brightRed bg-brightRed hover:bg-brightRed'
              aria-current='false'
              aria-label='Slide 2'
              data-carousel-slide-to='1'
            ></button>
            <button
              type='button'
              class='w-3 h-3 rounded-full border-2 border-brightRed bg-brightRed hover:bg-brightRed'
              aria-current='false'
              aria-label='Slide 3'
              data-carousel-slide-to='2'
            ></button>
            <button
              type='button'
              class='w-3 h-3 rounded-full border-2 border-brightRed bg-brightRed hover:bg-brightRed'
              aria-current='false'
              aria-label='Slide 4'
              data-carousel-slide-to='3'
            ></button>
          </div>

          {/* slider controls */}
          <button
            type='button'
            class='flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none'
            data-carousel-prev=''
          >
            <svg
              class='w-5 h-5 text-black sm:w-6 sm:h-6 dark:text-gray-800'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M15 19l-7-7 7-7'
              ></path>
            </svg>
          </button>
          <button
            type='button'
            class='flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none'
            data-carousel-next=''
          >
            <svg
              class='w-5 h-5 text-black sm:w-6 sm:h-6 dark:text-gray-800'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M9 5l7 7-7 7'
              ></path>
            </svg>
          </button>
        </div>
        {/* end testimonial carousel */}
        {/* button */}
        <div className='my-16'>
          <a
            href='/#'
            className='shadow-lg shadow-brightRedLight p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight'
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
