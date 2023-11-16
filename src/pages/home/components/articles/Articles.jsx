import React, { useEffect, useRef, useState } from 'react';
import articleCover2 from '../../../../assets/article-cover-2.png';
import rightArrow from '../../../../assets/arrow-right.svg';
import leftArrow from '../../../../assets/arrow-left.svg';
import redirect from '../../../../assets/redirect.svg';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

const mediumRssFeed =
  'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@wagmi11';

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

  const MAX_ARTICLES = 6;

  const [articles, setArticles] = useState();

  useEffect(() => {
    const loadArticles = async () => {
      fetch(mediumRssFeed, { headers: { Accept: 'application/json' } })
        .then(res => res.json())
        .then(data => data.items.filter((item) => item.thumbnail))
        .then(newArticles => newArticles.slice(0, MAX_ARTICLES))
        .then(articles => setArticles(articles))
        .catch(error => console.log(error));
    };

    loadArticles();
  }, [MAX_ARTICLES]);

  const handleImageError = (event) => {
    event.target.src = articleCover2;
  };
  return (
    <div id='blogs'>
      <section className='py-24 team px-4 md:px-0 articles overflow-hidden'>
        <div>
          <div className='container max-w-[95%] md:max-w-[85%] mx-auto'>
            <div className='md:max-w-[40%] mb-4'>
              <h2 className='text-3xl mb-4'>Latest Articles</h2>
              <p className='text-gray'>
              Stories by wagmi 11 💎 on Medium
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
          <div className='md:pl-32 lg:pl-24 sm:pl-24'>
            {articles && <Slider ref={sliderRef} {...settings}>
              {articles?.map((value, index) => (
                <div key={index} className='px-4 h-full'>
                  <div
                    className='rounded-3xl p-6 md:w-[350px] md:min-h-[350px] bg-white'
                    style={{ border: '1px solid rgba(0, 0, 0, 0.08)' }}
                  >
                    <div className='flex gap-4 items-end mb-8'>
                      <motion.img
                        src={value.thumbnail ? value.thumbnail : articleCover2}
                        alt={value.title}
                        className='img-fluid h-[150px] object-cover w-full'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        onError={handleImageError}
                      />
                    </div>
                    <h3 className='text-xl mb-4 min-h-[100px]'>{value.title.slice(0,78)} {value.title.length > 78 ? '...' : ''}</h3>
                    {/* <p className='text-[#8F8F8F] opacity-80 font-light'>
                      {value.description}
                    </p> */}
                    <div className='pt-4 flex justify-between items-center'>
                      {value.author && <div
                        className='py-1 px-4 rounded-full text-sm bg-[#4a154b33] w-fit'
                        style={{ border: '1px solid #4A154B' }}
                      >
                        {value.author}
                      </div>}
                      <a href={value.link} target="_blank" rel="noopener noreferrer">
                      <img src={redirect} alt='redirect' />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Articles;
