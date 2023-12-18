import React, { useEffect } from 'react';
import Hero from './components/hero/Hero';
import Prediction from './components/prediction/Prediction';
import Ton from './components/ton/Ton';
import AppDownloadSection from './components/app-download/AppDownloadSection';
import Join from './components/join/Join';
import Team from './components/team/Team';
import Footer from '../../components/footer/Footer';
import Articles from './components/articles/Articles';
import NotificationBanner from '../../components/notification-banner/NotificationBanner';

const Home = () => {
  return (
    <>
      <NotificationBanner/>
      <Hero />
      <Prediction />
      <Ton />
      <AppDownloadSection />
      <Join />
      <Team />
      <Articles />
      <Footer />
    </>
  );
};

export default Home;
