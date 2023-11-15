import React from 'react';
import './Join.scss';

// import leftFirstPlate from '../../../../assets/join-left-1.svg';
// import leftSecondPlate from '../../../../assets/join-left-2.svg';
// import leftThirdPlate from '../../../../assets/join-left-3.svg';
// import rightFirstPlate from '../../../../assets/join-right-1.svg';
// import rightSecondPlate from '../../../../assets/join-right-2.svg';
// import rightThirdPlate from '../../../../assets/join-right-3.svg';
// import middleLeftPlate from '../../../../assets/join-middle-left.svg';
// import middlePlate from '../../../../assets/join-middle.svg';
// import middleRightPlate from '../../../../assets/join-middle-right.svg';
import rocket from '../../../../assets/rocket.svg';
import { motion } from 'framer-motion';
// import { MouseParallax, ScrollParallax } from 'react-just-parallax';

const Join = () => {
  return (
    <section className='bg-violet join px-4 md:px-0 pt-24 lg:pt-0 overflow-hidden md:overflow-visible'>
      <div className='container max-w-[95%] md:max-w-[85%] mx-auto'>
        <div className='grid md:grid-cols-12 gap-20'>
          <div className='md:col-span-6 flex flex-col items-start justify-center'>
            <h3 className='text-white text-3xl mb-6 font-header font-bold'>
              Join Our Vision - Invest in the Future
            </h3>
            <p className='text-[#D5DFE9]'>
              At Wagmi 11, we're pioneering censorship-resistant forecasting
              tools to empower people globally. Join our bold vision by
              investing in our cutting-edge prediction platforms. We seek
              prescient investment partners aligned with our mission to disrupt
              the status quo. Back us to navigate new possibilities and own the
              future.
            </p>
            <div className='flex gap-4 mt-6'>
            <a href="https://airtable.com/appwA2iT5p19G03FM/shrrlJAwFVR8ZwpZO" target="_blank" rel="noopener noreferrer">
              <button className='primary-btn light'>Invest Now</button>
            </a>
              <button className='primary-btn transparent opacity-50'>Litepaper</button>
            </div>
          </div>
          <div className='lg:col-span-6 flex justify-center items-center'>
            {/* <div className='join-illustration'>
              <ScrollParallax
                isAbsolutelyPositioned
                strength={0.05}
                lerpEase={0.02}
              >
                <img src={logo} alt='join wagmi' className='logo' />
              </ScrollParallax>
              <MouseParallax
                isAbsolutelyPositioned
                strength={0.07}
                lerpEase={0.02}
              >
                <img src={leftFirstPlate} alt='plates' className='left-first' />
              </MouseParallax>
              <MouseParallax
                isAbsolutelyPositioned
                strength={0.07}
                lerpEase={0.04}
              >
                <img
                  src={leftSecondPlate}
                  alt='plates'
                  className='left-second'
                />
              </MouseParallax>
              <MouseParallax
                isAbsolutelyPositioned
                strength={0.07}
                lerpEase={0.03}
              >
                <img src={leftThirdPlate} alt='plates' className='left-third' />
              </MouseParallax>
              <MouseParallax
                isAbsolutelyPositioned
                strength={0.07}
                lerpEase={0.01}
              >
                <img
                  src={rightFirstPlate}
                  alt='plates'
                  className='right-first'
                />
              </MouseParallax>
              <MouseParallax
                isAbsolutelyPositioned
                strength={0.07}
                lerpEase={0.04}
              >
                <img
                  src={rightSecondPlate}
                  alt='plates'
                  className='right-second'
                />
              </MouseParallax>
              <MouseParallax
                isAbsolutelyPositioned
                strength={0.07}
                lerpEase={0.03}
              >
                <img
                  src={rightThirdPlate}
                  alt='plates'
                  className='right-third'
                />
              </MouseParallax>
              <MouseParallax
                isAbsolutelyPositioned
                strength={0.07}
                lerpEase={0.02}
              >
                <img
                  src={middleLeftPlate}
                  alt='plates'
                  className='middle-left'
                />
              </MouseParallax>
              <MouseParallax
                isAbsolutelyPositioned
                strength={0.07}
                lerpEase={0.01}
              >
                <img src={middlePlate} alt='plates' className='middle' />
              </MouseParallax>
              <MouseParallax
                isAbsolutelyPositioned
                strength={0.07}
                lerpEase={0.03}
              >
                <img
                  src={middleRightPlate}
                  alt='plates'
                  className='middle-right'
                />
              </MouseParallax>
            </div> */}
            <div className='rocket-container md:absolute w-full md:w-[41%] scale-125 md:scale-100'>
              <motion.img src={rocket} alt="rocket" initial={{ translateY: '10%', translateX: '-10%' }}
                whileInView={{ translateY: '-10%', translateX: '30%' }}
                transition={{ duration: 1, ease: 'easeInOut' }} className='w-[65%] md:hidden' />

              <motion.img src={rocket} alt="rocket" initial={{ translateY: '60%', translateX: '-10%' }}
                whileInView={{ translateY: '30%', translateX: '30%' }}
                transition={{ duration: 1, ease: 'easeInOut' }} className='w-[48%] min-w-[250px] hidden md:block lg:hidden' />

              <motion.img src={rocket} alt="rocket" initial={{ translateY: '10%', translateX: '-10%' }}
                whileInView={{ translateY: '-10%', translateX: '70%' }}
                transition={{ duration: 1, ease: 'easeInOut' }} className='w-[48%] min-w-[250px] hidden lg:block' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
