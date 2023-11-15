import React, { useRef } from 'react';
import './Ton.scss'
import { motion } from 'framer-motion';
import firstNotification from '../../../../assets/notification-1.svg';
import notification from '../../../../assets/notification.png';
// import notificationPattern from '../../../../assets/ton-notification-pattern.svg';

const CardOne = () => {
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
      <div className='ton-card notification'>
        <div className='card-banner'>
          {/* <motion.img
            src={notificationPattern}
            alt='pattern'
            className='bg-pattern'
            initial={{ scale: 0.7 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1 }}
          /> */}
          <motion.img
            src={notification}
            alt='notification'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
        <div className='card-content'>
          <h4>Notification</h4>
          <p>
          Get real-time updates for every transaction you make, delivered straight to your Telegram.
          </p>
        </div>
      </div>
      <div className='blob'></div>
    </div>
  );
};

export default CardOne;
