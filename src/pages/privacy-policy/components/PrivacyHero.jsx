import React from 'react';
import './PrivacyHero.scss';
import innerCircle from '../../../assets/inner-circle.svg';
import middleCircle from '../../../assets/middle-circle.svg';
import outerCircle from '../../../assets/outer-circle.svg';
import stars from '../../../assets/stars.svg';
import { motion } from 'framer-motion';
import NavigationBar from '../../../components/NavigationBar';

const PrivacyHero = () => {
  return (
    <div id='section-top'>
      <div className='overflow-hidden'>
        <NavigationBar />
        <section className='privacy-hero'>
          <motion.img
            src={outerCircle}
            alt='outer-circle'
            className='circle outer-circle'
            initial={{
              scale: 0,
              left: '50%',
              bottom: '1px',
              translateX: '-50%',
            }}
            animate={{
              scale: 1,
              left: '50%',
              bottom: '1px',
              translateX: '-50%',
            }}
            transition={{ duration: 1 }}
          />
          <motion.img
            src={middleCircle}
            alt='middle-circle'
            className='circle middle-circle'
            initial={{
              scale: 0,
              left: '50%',
              bottom: '1px',
              translateX: '-50%',
            }}
            animate={{
              scale: 1,
              left: '50%',
              bottom: '1px',
              translateX: '-50%',
            }}
            transition={{ duration: 1 }}
          />
          <motion.img
            src={innerCircle}
            alt='inner-circle'
            className='circle inner-circle'
            initial={{
              scale: 0,
              left: '50%',
              bottom: '1px',
              translateX: '-50%',
            }}
            animate={{
              scale: 1,
              left: '50%',
              bottom: '1px',
              translateX: '-50%',
            }}
            transition={{ duration: 1 }}
          />
          <motion.h2
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{ duration: 1, delay: 1 }}
            className='text-white text-3xl md:text-8xl text-center font-bold absolute left-1/2 -translate-x-1/2 bottom-20'
          >
            Privacy Policy
          </motion.h2>
          <motion.img
            src={stars}
            alt='stars'
            className='stars'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />
        </section>
      </div>
    </div>
  );
};

export default PrivacyHero;
