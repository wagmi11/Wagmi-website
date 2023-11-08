import React, { useRef } from 'react';
import './Ton.scss';
import { motion } from 'framer-motion';
import topUp from '../../../../assets/topup.png';
import topUpPattern from '../../../../assets/ton-topup-pattern.svg';

const CardThree = () => {
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
      <div className='ton-card topup'>
        <div className='card-banner'>
          {/* <motion.img
            src={topUpPattern}
            alt='pattern'
            className='bg-pattern'
            initial={{ scale: 0.7 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1 }}
          /> */}
          <motion.img
            src={topUp}
            alt='ease access'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />
        </div>
        <div className='card-content'>
          <h4>Ease of Access</h4>
          <p>
            Privacy is more than a promise. Anyone can verify our encryption
            protocols and privacy protections.
          </p>
        </div>
      </div>
      <div className='blob'></div>
    </div>
  );
};

export default CardThree;
