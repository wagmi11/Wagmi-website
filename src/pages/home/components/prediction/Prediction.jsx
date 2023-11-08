import React from 'react';
import fantasyIllustration from '../../../../assets/fantasy.svg';
import leaderboardIllustration from '../../../../assets/leaderboard.svg';
import predictionBg from '../../../../assets/prediction-bg.svg';
import leaderboardBg from '../../../../assets/leaderboard-bg.svg';
import fantasyBg from '../../../../assets/fantasy-bg.svg';
import stage from '../../../../assets/prediction-stage.svg';
import bitcoin from '../../../../assets/bitcoin.png';
import eth from '../../../../assets/eth.svg';
import ton from '../../../../assets/ton.png';
import { motion } from 'framer-motion';

const Prediction = () => {
  return (
    <div className='bg-sectionBg'>
      <section className='prediction pt-24 container max-w-[95%] md:max-w-[85%] mx-auto px-4 px-md-0'>
        <h2
          className='text-dark text-3xl md:text-5xl text-center my-16 lg:my-32 font-bold font-header'
          style={{ lineHeight: 'normal' }}
        >
          Where <span className='text-blue'>Play</span> Meets Prosperity
        </h2>
        <div className='grid md:grid-cols-12 gap-6'>
          <div className='md:col-span-8'>
            <div
              className='bg-green grid-col mb-6 overflow-hidden bg-center md:bg-right bg-no-repeat h-[500px] md:h-[300px]'
              style={{ backgroundImage: `url(${predictionBg})` }}
            >
              <h3 className='font-header font-medium'>Predictions</h3>
              <p>
                Wagmi11 offers wide categories of <br className='hidden md:block' /> predictions such as:
              </p>
              <ul className='text-white'>
                <li>Binary Predictions on Crypto Price</li>
                <li>Geopolitical Events</li>
                <li>Sports Events</li>
                <li>And many more.</li>
              </ul>
              <div className='absolute right-1/2 translate-x-1/2 md:translate-x-0 md:right-4 bottom-4 w-4/5 md:w-5/12'>
                <div className='relative'>
                  <motion.img
                    src={stage}
                    alt='stage'
                    className='z-10 w-full'
                    initial={{ translateY: '50px' }}
                    whileInView={{ translateY: 0 }}
                    transition={{ duration: 1 }}
                  />
                  <motion.img
                    src={bitcoin}
                    alt='bitcoin'
                    className='z-20 absolute top-0 -left-8 w-5/12'
                    initial={{ translateX: '50px' }}
                    whileInView={{ translateX: 0 }}
                    transition={{ duration: 1 }}
                  />
                  <motion.img
                    src={eth}
                    alt='eth'
                    className='z-20 absolute top-8 right-0 w-4/12'
                    initial={{ translateX: '-50px' }}
                    whileInView={{ translateX: 0 }}
                    transition={{ duration: 1 }}
                  />
                  <motion.img
                    src={ton}
                    alt='ton'
                    className='z-20 absolute bottom-0 left-1/2 w-4/12'
                    initial={{ translateX: '-50%', translateY: '-50px' }}
                    whileInView={{ translateX: '-50%', translateY: 0 }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>
            </div>

            <div
              className='bg-violet grid-col overflow-hidden md:bg-right bg-no-repeat h-[450px] md:h-[300px]'
              style={{ backgroundImage: `url(${fantasyBg})` }}
            >
              <h3 className='text-white font-header font-medium'>Fantasy</h3>
              <p>
              Wagmi11 offers wide range of fantasy <br className='hidden md:block' /> sports for user to play and win, including:
              </p>
              <ul className='text-white'>
                <li>Cricket</li>
                <li>Football</li>
                <li>Basketball</li>
                <li>And many more.</li>
              </ul>
              <motion.img
                src={fantasyIllustration}
                alt='fantasy'
                className='absolute right-4 bottom-4 w-full md:w-3/5'
                initial={{ translateY: '50px' }}
                whileInView={{ translateY: 0 }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>

          <div className='md:col-span-4'>
            <div
              className='bg-blueVariant grid-col h-[500px] md:h-full overflow-hidden bg-bottom md:bg-center bg-no-repeat'
              style={{ backgroundImage: `url(${leaderboardBg})` }}
            >
              <h3 className='text-white font-header font-medium'>Leaderboard</h3>
              <p>
                How Do You Measure Up? <br /> Check Your Ranking Against Others
              </p>
              <motion.img
                src={leaderboardIllustration}
                alt='leaderboard'
                className='absolute left-[50%] bottom-0 w-full'
                initial={{ translateY: '50px', translateX: '-50%' }}
                whileInView={{ translateY: 0, translateX: '-50%' }}
                transition={{ duration: 1.5 }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Prediction;
