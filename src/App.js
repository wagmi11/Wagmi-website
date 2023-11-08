import React, { useEffect } from 'react';
import './styles/main.scss';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import { ReactLenis } from '@studio-freight/react-lenis';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from './components/footer/Footer';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 2000);
  }, []);

  return (
    <ReactLenis root options={{ duration: 3 }}>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </ReactLenis>
  );
};

export default App;
