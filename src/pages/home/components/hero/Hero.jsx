import React, { useEffect, useState } from 'react';
import './Hero.scss';
import innerCircle from '../../../../assets/inner-circle.svg';
import middleCircle from '../../../../assets/middle-circle.svg';
import outerCircle from '../../../../assets/outer-circle.svg';
import phone from '../../../../assets/phone.svg';
import phoneLogo from '../../../../assets/phone-logo.svg';
import stage from '../../../../assets/stage.svg';
import stars from '../../../../assets/stars.svg';
import balls from '../../../../assets/balls.svg';
import leftBlueToken from '../../../../assets/ton.png';
import basketBall from '../../../../assets/basket-ball.svg';
import boxing from '../../../../assets/boxing.svg';
import eth from '../../../../assets/eth.svg';
import football from '../../../../assets/football.svg';
import bitcoin from '../../../../assets/bitcoin.png';
import heroMobile from '../../../../assets/hero-mobile.png';
import loaderbg from '../../../../assets/mobile-bg.svg';
import { MouseParallax, ScrollParallax } from 'react-just-parallax';
import { motion } from 'framer-motion';
import NavigationBar from '../../../../components/NavigationBar';

const Hero = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Simulate a 3-second delay before showing the hero section
  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setShowLoader(false);
    }, 3000);

    return () => {
      // Clear the timeout when the component unmounts to prevent memory leaks
      clearTimeout(delayTimer);
    };
  }, []); // The empty dependency array ensures this effect runs only once on component mount.

  useEffect(() => {
    const imageUrls = [
      innerCircle,
      middleCircle,
      outerCircle,
      phone,
      stage,
      stars,
      balls,
      leftBlueToken,
      basketBall,
      boxing,
      eth,
      football,
      bitcoin,
      heroMobile,
      phoneLogo
    ];

    const imagePromises = imageUrls.map(url => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(imagePromises)
      .then(() => {
        setImagesLoaded(true);
      })
      .catch(error => {
        console.error('Image preload error:', error);
      });
  }, []);

  return (
    <div>
      {showLoader ? (
        <div className='fixed h-screen w-screen bg-white flex justify-center items-center z-50'>
          <motion.img
            src={loaderbg}
            alt='loading'
            className='h-screen w-screen object-cover'
            initial={{ scale: 10 }}
            animate={{ scale: 1 }}
            transition={{ duration: 5 }}
          />
        </div>
      ) : imagesLoaded ? (
        <div className='overflow-hidden'>
          <NavigationBar />
          <section className='hero'>
            <motion.img
              src={phoneLogo}
              alt='logo'
              className='phone-logo'
              initial={{
                scale: 20,
                left: '50%',
                bottom: '300px',
                translateX: '-50%',
              }}
              animate={{
                scale: 1,
                left: '50%',
                bottom: '300px',
                translateX: '-50%',
              }}
              transition={{ duration: 2 }}
            />
            <motion.img
              src={outerCircle}
              alt='outer-circle'
              className='circle outer-circle'
              initial={{
                scale: 10,
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
              transition={{ duration: 2 }}
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
              transition={{ duration: 2 }}
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
              transition={{ duration: 2 }}
            />
            {/* <MouseParallax
              isAbsolutelyPositioned
              strength={0.14}
              lerpEase={0.01}
            > */}
            <motion.img
              src={phone}
              alt='phone'
              className='phone'
              initial={{
                scale: 10,
                left: '50%',
                bottom: '50px',
                translateX: '-50%',
              }}
              animate={{
                scale: 1,
                left: '50%',
                bottom: '50px',
                translateX: '-50%',
              }}
              transition={{ duration: 2 }}
            />
            {/* </MouseParallax> */}
            <ScrollParallax
              isAbsolutelyPositioned
              strength={0.14}
              lerpEase={0.04}
            >
              <motion.img
                src={stage}
                alt='stage'
                className='stage absolute'
                initial={{
                  opacity: 0,
                  left: '50%',
                  bottom: '-50px',
                  translateX: '-50%',
                }}
                animate={{
                  opacity: 1,
                  left: '50%',
                  bottom: 0,
                  translateX: '-50%',
                }}
                transition={{ duration: 1, delay: 1.8 }}
              />
            </ScrollParallax>
            <motion.img
              src={stars}
              alt='stars'
              className='stars'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
            />{' '}
            <motion.img
              src={balls}
              alt='balls'
              className='balls'
              initial={{ opacity: 0, bottom: 0 }}
              animate={{ opacity: 1, bottom: '130px' }}
              transition={{ duration: 1, delay: 2 }}
            />
            <MouseParallax
              isAbsolutelyPositioned
              strength={0.09}
              lerpEase={0.01}
            >
              <motion.img
                src={eth}
                alt='eth'
                className='leftBlueToken token'
                initial={{ opacity: 0, scale: 0.5, left: '50%' }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  left: '50%',
                  translateX: '-600px',
                }}
                transition={{ duration: 2, delay: 1.8 }}
              />
            </MouseParallax>
            <MouseParallax
              isAbsolutelyPositioned
              strength={0.05}
              lerpEase={0.02}
            >
              <motion.img
                src={basketBall}
                alt='basketBall'
                className='basketBall token'
                initial={{ opacity: 0, scale: 0.5, left: '50%' }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  left: '50%',
                  translateX: '-300px',
                }}
                transition={{ duration: 2, delay: 1.8 }}
              />
            </MouseParallax>
            <MouseParallax
              isAbsolutelyPositioned
              strength={0.1}
              lerpEase={0.04}
            >
              <motion.img
                src={boxing}
                alt='boxing'
                className='boxing token'
                initial={{ opacity: 0, scale: 0.5, left: '50%', top: '50%' }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  left: '50%',
                  top: '50%',
                  translateX: '-230px',
                  translateY: '-130px',
                }}
                transition={{ duration: 2, delay: 1.8 }}
              />
            </MouseParallax>
            <MouseParallax
              isAbsolutelyPositioned
              strength={0.08}
              lerpEase={0.03}
            >
              <motion.img
                src={leftBlueToken}
                alt='leftBlueToken'
                className='eth token'
                initial={{ opacity: 0, scale: 0.5, top: '50%', left: '50%' }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  top: '50%',
                  left: '50%',
                  translateY: '-280px',
                }}
                transition={{ duration: 2, delay: 1.8 }}
              />
            </MouseParallax>
            <MouseParallax
              isAbsolutelyPositioned
              strength={0.03}
              lerpEase={0.02}
            >
              <motion.img
                src={football}
                alt='football'
                className='football token'
                initial={{ opacity: 0, scale: 0.5, left: '50%' }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  left: '50%',
                  translateX: '200px',
                }}
                transition={{ duration: 2, delay: 1.8 }}
              />
            </MouseParallax>
            <MouseParallax
              isAbsolutelyPositioned
              strength={0.03}
              lerpEase={0.02}
            >
              <motion.img
                src={bitcoin}
                alt='bitcoin'
                className='bitcoin token'
                initial={{ opacity: 0, scale: 0.5, left: '50%' }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  left: '50%',
                  translateX: '400px',
                }}
                transition={{ duration: 2, delay: 1.8 }}
              />
            </MouseParallax>
          </section>
          {/* <section className='md:hidden h-96 flex items-end justify-center'>
            <img src={heroMobile} alt='hero' className='w-full' />
          </section> */}
        </div>
      ) : (
        <div className='error-message'>
          Images failed to load. Please refresh the page.
        </div>
      )}
    </div>
  );
};

export default Hero;
