import React from 'react';
import './Footer.scss';
import innerCircle from '../../assets/footer-inner-circle.svg';
import middleCircle from '../../assets/footer-middle-circle.svg';
import outerCircle from '../../assets/footer-outer-circle.svg';
import star from '../../assets/footer-star.svg';
import telegram from '../../assets/telegram.svg';
import discord from '../../assets/discord.svg';
import twitter from '../../assets/twitter-logo.svg';
import leftCursor from '../../assets/left-cursor.svg';
import rightCursor from '../../assets/right-cursor.svg';
import { motion } from 'framer-motion';
import { MouseParallax } from 'react-just-parallax';


const Footer = () => {
  return (
    <div className='bg-[#58A0F4]'>
      <footer className='h-[550px] xl:h-[700px] 2xl:h-[850px] overflow-hidden'>
        <div className='container max-w-[95%] md:max-w-[85%] mx-auto footer text-center relative'>
          <motion.img
            src={outerCircle}
            alt='circle'
            className='circle w-[100%]'
            initial={{ translateY: '-100px', translateX: '-50%' }}
            whileInView={{ translateY: 0, translateX: '-50%' }}
            transition={{ duration: 2 }}
          />
          <motion.img
            src={middleCircle}
            alt='circle'
            className='circle w-[80%]'
            initial={{ translateY: '-100px', translateX: '-50%' }}
            whileInView={{ translateY: 0, translateX: '-50%' }}
            transition={{ duration: 2 }}
          />
          <motion.img
            src={innerCircle}
            alt='circle'
            className='circle w-[60%]'
            initial={{ translateY: '-100px', translateX: '-50%' }}
            whileInView={{ translateY: 0, translateX: '-50%' }}
            transition={{ duration: 2 }}
          />
          <MouseParallax isAbsolutelyPositioned strength={0.09} lerpEase={0.01}>
            <motion.img
              src={rightCursor}
              alt='cursor'
              className='absolute top-[400px] md:top-[300px] left-2/3 z-20'
              initial={{ translateY: '-50px' }}
              whileInView={{ translateY: 0 }}
              transition={{ duration: 2 }}
            />
          </MouseParallax>
          <MouseParallax isAbsolutelyPositioned strength={0.09} lerpEase={0.01}>
            <motion.img
              src={leftCursor}
              alt='cursor'
              className='absolute top-[200px] left-[15%] z-20 hidden md:block'
              initial={{ translateY: '-50px' }}
              whileInView={{ translateY: 0 }}
              transition={{ duration: 2 }}
            />
          </MouseParallax>

          <img src={star} alt='circle' className='star star-left-1' />
          <img src={star} alt='circle' className='star star-left-2' />
          <img src={star} alt='circle' className='star star-left-3' />
          <img src={star} alt='circle' className='star star-left-4' />
          <img src={star} alt='circle' className='star star-left-5' />
          <img src={star} alt='circle' className='star star-right-1' />
          <img src={star} alt='circle' className='star star-right-2' />
          <img src={star} alt='circle' className='star star-right-3' />
          <img src={star} alt='circle' className='star star-right-4' />
          <img src={star} alt='circle' className='star star-right-5' />
          <img src={star} alt='circle' className='star star-right-6' />
          <img src={star} alt='circle' className='star star-right-7' />
          <div className='z-10 relative pt-14'>
            <motion.h2
              className='text-4xl md:text-6xl text-white mb-8 font-header font-bold'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              Join the community
            </motion.h2>
            <motion.p
              className='text-[#D5DFE9] text-lg font-light max-w-[90%] md:max-w-[580px] mx-auto mb-6'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2.5 }}
            >
              Join us and follow our social media handles to stay up to date with our latest news and updates!
            </motion.p>
            <div className='bg-dark p-3 rounded-xl flex justify-between items-center max-w-[230px] mx-auto top-footer-social'>
              <a
                href='https://t.me/wagmi11'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={telegram} alt='telegram' />
              </a>
              <a
                href='https://discord.com/invite/EUKwQy4P96'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={discord} alt='discord' />
              </a>

              <a
                href='https://x.com/wagmi_11'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={twitter} alt='twitter' />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
