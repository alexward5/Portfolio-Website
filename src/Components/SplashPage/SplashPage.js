import React, { Component } from 'react';
import './SpashPage.css';
import Particles from 'react-particles-js';
import ParticlesParams from './particles-params.json';
import Header from '../Header/Header';
import { ReactComponent as MountainsTop } from '../../Assets/svg/mountains-top.svg';

class SplashPage extends Component {

  render() {

    return (
      // import settings for particles.js from external file
      <div className="SplashPage">
        <Particles 
          params={ParticlesParams}
          style={{
            position: 'absolute',
            top: '0',
            left: '0'
          }}
        />
        <Header />
        <div className="info">
          <h1 className="name header-font">Alexander Ward</h1>
          <h2 className="title header-font">Software Developer</h2>
        </div>
        <MountainsTop className="mountains-top container"/>
      </div>
    );
  }
}

export default SplashPage;