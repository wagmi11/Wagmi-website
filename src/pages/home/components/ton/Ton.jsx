import React from 'react';
import './Ton.scss';
import tonLogo from '../../../../assets/ton-logo.svg';
import { motion } from 'framer-motion';
import CardOne from './CardOne';
import CardTwo from './CardTwo';
import CardThree from './CardThree';

const Ton = () => {
  return (
    <div className='bg-sectionBg'>
      <motion.section
        className='container mx-auto px-4 px-md-0 text-center py-32'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <p className='text-3xl mb-8 font-header font-medium'>Partners & Recognition</p>
        <img src={tonLogo} alt='TON' className='mx-auto grayscale-[90%] max-w-[160px]' />
      </motion.section>
      <section className='bg-tonBg pt-12 ton px-4 px-md-0' id='features'>
        <div className='container max-w-[95%] md:max-w-[85%] mx-auto'>
          <h2 className='text-white text-2xl mb-6 font-header font-medium'>
            Powered by TON,
            <br />
            Super app for new web
          </h2>
          <p className='text-gray mb-16'>
            Unleash the Potential of the Web with TON-Powered <br /> Super App
          </p>
          <div className='flex justify-between items-center gap-6 flex-col lg:flex-row'>
            <CardOne />
            <CardTwo />
            <CardThree />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ton;
