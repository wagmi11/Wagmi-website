import React, { useRef } from 'react';
import member1 from '../../../../assets/member-1.png';
import member2 from '../../../../assets/member-2.png';
import member3 from '../../../../assets/member-3.png';
import member4 from '../../../../assets/member-4.png';
import rightArrow from '../../../../assets/arrow-right.svg';
import leftArrow from '../../../../assets/arrow-left.svg';
import twitter from '../../../../assets/twitter.svg';
import linkedin from '../../../../assets/linkedin.svg';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

const Team = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.2,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const data = [
    {
      name: 'Ajay',
      image: member3,
      role: 'Founder',
      twitterHandle: 'https://twitter.com/ajaytharun',
      linkedinHandle: 'https://www.linkedin.com/in/ajay-k-0bab01202',
    },
    {
      name: 'Santosh',
      image: member1,
      role: 'Co-Founder',
      twitterHandle: 'https://twitter.com/elviric',
      linkedinHandle: 'https://www.linkedin.com/in/elviric/',
    },
    {
      name: 'Tuminzee',
      image: member2,
      role: 'Lead Developer',
      twitterHandle: 'https://twitter.com/tuminzee',
      linkedinHandle: 'https://www.linkedin.com/in/tumin-sheth/',
    },

    {
      name: 'Avinash Kumar',
      image: member4,
      role: 'Product Designer',
      twitterHandle: 'https://twitter.com/0xavinash',
      linkedinHandle: 'https://www.linkedin.com/in/0xavinash/',
    },
  ];
  return (
    <div className='bg-sectionBg' id='section-team'>
      <section className='py-24 team px-4 md:px-0 overflow-hidden'>
        <div>
          <div className='container max-w-[95%] md:max-w-[85%] mx-auto'>
            <div className='md:max-w-[45%] mb-4'>
              <h2 className='text-3xl mb-4 font-header font-bold'>
                Meet the Team
              </h2>
              <p className='text-gray'>
                Get to know the passionate individuals behind Wagmi11 who are
                dedicated to revolutionizing fantasy sports and prediction
                platforms
              </p>
            </div>
          </div>
          <div className='flex gap-6 justify-end md:pr-20 mb-6 md:-translate-y-20'>
            <button
              className='primary'
              onClick={() => sliderRef.current.slickPrev()}
            >
              <img src={leftArrow} alt='left arrow' className='img-fluid' />
            </button>
            <button
              className='primary'
              onClick={() => sliderRef.current.slickNext()}
            >
              <img src={rightArrow} alt='right arrow' className='img-fluid' />
            </button>
          </div>
          <div className='xxl:pl-28 md:pl-24 sm:pl-24'>
            <Slider ref={sliderRef} {...settings}>
              {data.map(({ image, name, role, twitterHandle, linkedinHandle }, index) => (
                <div key={index} className='px-4 h-full'>
                  <div
                    className='rounded-3xl p-6 md:w-[350px] bg-white'
                    style={{ border: '1px solid rgba(0, 0, 0, 0.08)' }}
                  >
                    <motion.img
                      src={image}
                      alt={name}
                      className='img-fluid w-full'
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    />
                    <div className='mt-4'>
                      <h3>{name}</h3>
                      <p className='text-[#8F8F8F] mb-3'>{role}</p>
                      <div className='flex gap-2'>
                        <a
                          href={twitterHandle}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <img src={twitter} alt='twitter' />
                        </a>
                        <a
                          href={linkedinHandle}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <img src={linkedin} alt='linkedin' />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
