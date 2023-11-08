import React, { useRef } from 'react';
import './Ton.scss'
import { motion } from 'framer-motion';
import easeAccess from '../../../../assets/ease-access.png';
import easePattern from '../../../../assets/ton-access-pattern.svg';

const CardTwo = () => {
  const cardRef = useRef(null);

  const handleMouseMove = e => {
    const card = cardRef.current;
    if (!card) return;

    const cardRect = card.getBoundingClientRect();
    const x = e.clientX - cardRect.left;
    const y = e.clientY - cardRect.top;

    card.style.setProperty('--circle-x', `${x - 100}px`);
    card.style.setProperty('--circle-y', `${y - 100}px`);
  };
  return (
    <div
      className='ton-card-wrapper md:translate-y-[50px]'
      ref={cardRef}
      onMouseMove={handleMouseMove}
    >
      <div className='ton-card ease-access'>
              <div className='card-banner'>
                {/* <motion.img
                  src={easePattern}
                  alt='pattern'
                  className='bg-pattern'
                  initial={{ scale: 0.7 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1 }}
                /> */}
                <motion.img
                  src={easeAccess}
                  alt='ease access'
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  className='w-full'
                />
              </div>
              <div className='card-content'>
                <h4>Ease of Access</h4>
                <p>
                With our app, you can easily use Telegram to access all of its features.
                </p>
              </div>
            </div>
      <div className='blob'></div>
    </div>
  );
};

export default CardTwo;
