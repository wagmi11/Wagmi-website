import React from 'react';
import './styles/main.scss';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import { ReactLenis } from '@studio-freight/react-lenis';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PrivacyPolicy from './pages/privacy-policy/PrivacyPolicy';
import FooterJoin from './components/footer-join/FooterJoin';

const App = () => {
  return (
    <ReactLenis root options={{ duration: 3 }}>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/privacy-policy' component={PrivacyPolicy} />
        </Switch>
        <FooterJoin/>
      </Router>
    </ReactLenis>
  );
};

export default App;
