import React, { Component } from 'react';
import { render } from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import MediaQuery from 'react-responsive';
import WideScreenHero from './src/Slides/WideScreen/HeroSlide/Hero';
import WideScreenWork from './src/Slides/WideScreen/WorkSlide/Work';
import WideScreenSkills from './src/Slides/WideScreen/Skills';
import WideScreenContact from './src/Slides/WideScreen/ContactSlide/Contact';
import MobileHero from './src/Slides/Mobile/HeroSlide/Hero';
import MobileWork from './src/Slides/Mobile/WorkSlide/Work';
import MobileSkills from './src/Slides/Mobile/Skills';
import MobileContact from './src/Slides/Mobile/ContactSlide/Contact';
import './src/Assets/index.css';

const GlobalStyle = createGlobalStyle`
html, body { margin: 0;}
*, *:before, *:after { box-sizing: border-box; }
`;

class App extends Component {
  componentDidMount() {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }

  render() {
    return (
      <React.Fragment>
        <MediaQuery query="(min-device-width: 1224px)">
          <WideScreenHero />
          <WideScreenWork />
          <WideScreenSkills />
          <WideScreenContact />
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">
          <MobileHero />
          <MobileWork />
          <MobileSkills />
          <MobileContact />
        </MediaQuery>
        <GlobalStyle />
      </React.Fragment>
    );
  }
}

render(React.createElement(App), document.getElementById('root'));
