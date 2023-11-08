import React, { useState } from 'react';
import LogoImage from '../assets/logo.svg';
import './NaivgationBar.scss';
import { motion } from 'framer-motion';
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from 'react-scroll';

const navLinks = [
  {
    name: 'Features',
    targetSection: 'features',
  },
  {
    name: 'Products',
    targetSection: 'products',
  },
  {
    name: 'Meet the team',
    targetSection: 'team',
  },
];

const navList = (
  <ul className='flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-center gap-8'>
    {navLinks.map((item, index) => (
      <Link
        to={item.targetSection}
        spy={true}
        smooth={true}
        offset={-50}
        duration={1000}
      >
        <li key={index} className='text-white cursor-pointer'>
          {item.name}
        </li>
      </Link>
    ))}
  </ul>
);

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className='fixed top-4 left-0 py-4 w-full max-w-full px-4 px-md-0 z-50 navigation-bar'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 3.2 }}
    >
      <div className='bg-dark border-2 border-darkBorder container w-full max-w-4xl mx-auto px-6 py-4 flex justify-between items-center rounded-2xl'>
        <img src={LogoImage} alt='wagmi 11 logo' />
        <div className='hidden lg:block'>{navList}</div>
        <button className='primary-btn hidden lg:block'>Launch App</button>
        <button
          className={`lg:hidden nav-button menu ${
            isOpen ? 'opened' : ''
          } relative`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg width='100' height='35' viewBox='0 0 100 100'>
            <path
              className='line line1'
              d='M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058'
            />
            <path className='line line2' d='M 20,50 H 80' />
            <path
              className='line line3'
              d='M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942'
            />
          </svg>
        </button>
      </div>
      <motion.div
        className={`fixed left-0 w-full top-32 mt-2 lg:hidden overflow-hidden px-4 ${
          isOpen ? 'fixed' : 'hidden'
        }`}
      >
        <div
          className={`rounded-2xl px-6 border-4 border-darkBorder py-6 bg-dark`}
        >
          <div className='lg:hidden'>{navList}</div>
          <button className='primary-btn mt-6'>Launch App</button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default NavigationBar;
