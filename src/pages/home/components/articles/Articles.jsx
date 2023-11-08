import React, { useRef } from 'react';
import articleCover1 from '../../../../assets/article-cover-1.svg';
import articleCover2 from '../../../../assets/article-cover-2.png';
import articleCover3 from '../../../../assets/article-cover-3.svg';
import rightArrow from '../../../../assets/arrow-right.svg';
import leftArrow from '../../../../assets/arrow-left.svg';
import redirect from '../../../../assets/redirect.svg';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

const Articles = () => {
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
      title: 'The easiest way to buy crypto within our app',
      cover: articleCover1,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
      author: 'Ajay P.',
    },
    {
      title: 'The easiest way to buy crypto within our app',
      cover: articleCover2,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
      author: 'Ajay P.',
    },
    {
      title: 'The easiest way to buy crypto within our app',
      cover: articleCover3,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
      author: 'Ajay P.',
    },
    {
      title: 'The easiest way to buy crypto within our app',
      cover: articleCover1,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
      author: 'Ajay P.',
    },
  ];
  return (
    <div>
      <section className='py-24 team px-4 md:px-0 articles overflow-hidden'>
        <div>
          <div className='container max-w-[95%] md:max-w-[85%] mx-auto'>
            <div className='md:max-w-[40%] mb-4'>
              <h2 className='text-3xl mb-4'>Latest Articles</h2>
              <p className='text-gray'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
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
          <div className='md:pl-32 sm:pl-24'>
            <Slider ref={sliderRef} {...settings}>
              {data.map(({ cover, title, description, author }, index) => (
                <div key={index} className='px-4 h-full'>
                  <div
                    className='rounded-3xl p-6 md:w-[350px] md:min-h-[450px]'
                    style={{ border: '1px solid rgba(0, 0, 0, 0.08)' }}
                  >
                    <div className='flex gap-4 items-end mb-8'>
                      <motion.img
                        src={cover}
                        alt={title}
                        className='img-fluid'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                      />
                    </div>
                    <h3 className='text-xl mb-4'>{title}</h3>
                    <p className='text-[#8F8F8F] opacity-80 font-light'>
                      {description}
                    </p>
                    <div className='pt-4 flex justify-between items-center'>
                      <div
                        className='py-1 px-4 rounded-full text-sm bg-[#4a154b33] w-fit'
                        style={{ border: '1px solid #4A154B' }}
                      >
                        {author}
                      </div>
                      <img src={redirect} alt='redirect' />
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

export default Articles;
