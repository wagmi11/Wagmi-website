import React from 'react';
import './AppDownloadSection.scss';
import predictionApp from '../../../../assets/prediction-app.png';
import fantasyApp from '../../../../assets/fantasy-app.png';
import eth from '../../../../assets/eth.svg';
import ton from '../../../../assets/ton.png';
import bitcoin from '../../../../assets/bitcoin.png';
import boxer from '../../../../assets/boxing.svg';
import cricketBall from '../../../../assets/cricket-ball.svg';
import footBall from '../../../../assets/football.svg';
import { motion } from 'framer-motion';

const AppDownloadSection = () => {
  return (
    <div className='bg-sectionBg' id='products'>
      <section className='app-download container max-w-[95%] md:max-w-[85%] mx-auto py-24 md:py-32 px-4 px-md-0'>
        <div className='grid lg:grid-cols-12 gap-20 mb-20 download-row'>
          <div className='lg:col-span-6 order-2 md:order-1'>
            <div className='content'>
              <h3 className='font-header font-bold'>
                Experience the Wagmi 11 Prediction app today!
              </h3>
              <p>
                A space for making predictions, engaging in contests, and
                enjoying user-friendly features with robust security. Welcome to
                the future of prediction platforms!
              </p>
              <div className='flex gap-2'>
                <a href="https://t.me/wagmi11" target="_blank" rel="noopener noreferrer">
                  <button className='primary-btn mt-6'>Launch</button>
                </a>
                <a href="https://wagmi11.notion.site/How-to-Play-Wagmi11-bb7288f884214da4b3ad92835e7796a1?pvs=4" target="_blank" rel="noopener noreferrer">
                  <button className='primary-btn light mt-6 border-2 border-[#00000066]'>
                    How to Play?
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className='lg:col-span-6 order-1 md:order-2'>
            <div className='app-download-card'>
              <motion.img
                src={predictionApp}
                alt='pattern'
                className='app-item'
                initial={{ translateY: '50px' }}
                whileInView={{ translateY: 0 }}
                transition={{ duration: 1 }}
              />
              <motion.img
                src={eth}
                alt='eth'
                className='absolute top-16 md:top-0 left-4 w-24 md:w-36'
                initial={{ translateX: '50px' }}
                whileInView={{ translateX: 0 }}
                transition={{ duration: 1 }}
              />
              <motion.img
                src={bitcoin}
                alt='pattern'
                className='absolute z-10 -bottom-8 md:-bottom-16 left-12 md:left-24 w-20 md:w-32'
                initial={{ translateY: '50px' }}
                whileInView={{ translateY: 0 }}
                transition={{ duration: 1.3 }}
              />
              <motion.img
                src={ton}
                alt='pattern'
                className='absolute z-10 right-0 -bottom-12 w-28 md:w-40'
                initial={{ translateY: '50px' }}
                whileInView={{ translateY: 0 }}
                transition={{ duration: 2 }}
              />
            </div>
          </div>
        </div>
        <div className='grid lg:grid-cols-12 gap-20 download-row'>
          <div className='lg:col-span-6'>
            <div className='app-download-card'>
              <motion.img
                src={fantasyApp}
                alt='pattern'
                className='app-item'
                initial={{ translateY: '50px' }}
                whileInView={{ translateY: 0 }}
                transition={{ duration: 1 }}
              />
              <motion.img
                src={cricketBall}
                alt='eth'
                className='absolute top-16 md:top-0 right-16 md:right-24 z-10'
                initial={{ translateY: '50px' }}
                whileInView={{ translateY: 0 }}
                transition={{ duration: 1.5 }}
              />
              <motion.img
                src={boxer}
                alt='pattern'
                className='absolute z-10 -bottom-16 left-8 md:left-24 w-20 md:w-28'
                initial={{ translateY: '50px' }}
                whileInView={{ translateY: 0 }}
                transition={{ duration: 1.3 }}
              />
              <motion.img
                src={footBall}
                alt='pattern'
                className='absolute z-10 right-16 -bottom-12 w-24'
                initial={{ translateY: '50px' }}
                whileInView={{ translateY: 0 }}
                transition={{ duration: 2 }}
              />
            </div>
          </div>
          <div className='lg:col-span-6 flex justify-end items-center'>
            <div className='content'>
              <h3 className='font-header font-bold'>
                Explore the Wagmi 11 Fantasy app today!
              </h3>
              <p>
                A platform for assembling sports teams, participating in
                contests, tracking player stats, all with user-friendly features
                and top-notch security.
              </p>
              <div className='flex gap-2'>
                <button className='primary-btn mt-6'>Coming Soon</button>
                <button className='primary-btn light mt-6 border-2 border-[#00000066] opacity-50'>
                  How to Play?
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppDownloadSection;
