import React from 'react';
import logo from '../../assets/logo-white.svg';
import footerInstagram from '../../assets/footer-instagram.png';
import footerTwitter from '../../assets/footer-x.png';
import footerLinkedin from '../../assets/footer-linkedin.png';
import footerYoutube from '../../assets/footer-youtube.png';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const FooterJoin = () => {
  return (
    <footer className='bg-[#58A0F4]'>
      <div className='text-center py-12'>
        <img src={logo} alt='wagmi 11' className='mx-auto mb-8' />
        <ul className='flex flex-wrap justify-center items-center gap-8 text-[#fff]'>
          <HashLink smooth to='/#features'><li>Features</li></HashLink>
          <HashLink smooth to='/#products'><li>Products</li></HashLink>
          <HashLink smooth to='/#team'><li>Meet the Team</li></HashLink>
          <HashLink smooth to='/#blogs'><li>Blog</li></HashLink>
          <li>Careers</li>
          <li>Help</li>
          <HashLink to='/privacy-policy#section-top'>
            <li>Privacy</li>
          </HashLink>
        </ul>
      </div>
      <div
        className='flex flex-col md:flex-row gap-6 justify-between items-center py-8 pb-12 container max-w-[95%] md:max-w-[85%] mx-auto'
        style={{ borderTop: '1px solid #E4E7EC' }}
      >
        <ul className='flex items-center gap-1 bottom-footer-list'>
          <li>
            <a
              href='https://instagram.com/wagmi11'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={footerInstagram} alt='instagram' width={18} />
            </a>
          </li>
          <li>
            <a
              href='https://x.com/wagmi_11'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={footerTwitter} alt='twitter' width={18} />
            </a>
          </li>
          <li>
            <a
              href='https://linkedin.com/company/wagmi11/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={footerLinkedin} alt='linkedin' width={18} />
            </a>
          </li>
          <li>
            <a
              href='https://www.youtube.com/@wagmi11'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={footerYoutube} alt='youtube' width={18} />
            </a>
          </li>
        </ul>
        <p className='text-[#fff]'>© 2023 Wagmi 11. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default FooterJoin;
