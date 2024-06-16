import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import shortlyLogo from './assets/images/logo.svg';
import illustrationWorking from './assets/images/illustration-working.svg';
import workingImg from '../public/illustration-working.svg';

import bgShortenMobile from './assets/images/bg-shorten-mobile.svg';
import bgShortenDesktop from './assets/images/bg-shorten-desktop.svg';

import iconBrandRecognition from './assets/images/icon-brand-recognition.svg';
import iconDetailedRecords from './assets/images/icon-detailed-records.svg';
import iconFullyCustomizable from './assets/images/icon-fully-customizable.svg';

import bgBoostMobile from './assets/images/bg-boost-mobile.svg';
import bgBoostDesktop from './assets/images/bg-boost-desktop.svg';

function App() {
  // const [count, setCount] = useState(0)
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const isMobile = width < 768;
  console.log(`isMobile: ${isMobile}`)

  return (
    <>
      <header className='header'>
        <div className='logo-container align-left'>
          <img className='header-image' alt='shortly logo' src={shortlyLogo} />
        </div>
        {/* Todo: nav links with login/signup */}
      </header>

      <section className='hero'>
        <div className='hero-image-container'>
          {/* <div className='hero-image' style={{ background: `url(${workingImg})`}}></div> */}
          <img className='hero-image' alt='Illustration working' src={illustrationWorking} />
        </div>
        <div className='heading-container'>
          <h1 className='hero-heading'>More than just shorter links</h1>
          <p className='hero-subheading'>Build your brand's recognition and get detailed insights on how your links are performing.</p>
          <div className='button-container'>
            <button className='btn-round'>Get Started</button>
          </div>
        </div>
      </section>

      <section className='form-container' style={{ background: `url(${isMobile ? bgShortenMobile : bgShortenDesktop})`, backgroundColor: 'hsl(257, 27%, 26%)' }}>
        <form className='url-form'>
          <div className='input-container'>
            <input className='url-input' type='text' placeholder='Shorten a link here...' />
          </div>
          <div className='submit-container'>
            <button className='btn-submit' type='submit'>Shorten It!</button>
          </div>
        </form>
      </section>

      <section className='url-list' style={{ background: 'yellow' }}></section>

      <section className='main-content' style={{ background: 'whitesmoke' }}>
        <h2>Advanced Statistics</h2>
        <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
        <div className='card-container'>
          <div className='card'>
            <div className='card-img'>
              <img alt='graph image' src={iconBrandRecognition} />
            </div>
            <h3 className='card-heading'>Brand Recognition</h3>
            <p className='card-content'>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
          </div>
          <div className='card'>
            <div className='card-img'>
              <img alt='graph image' src={iconDetailedRecords} />
            </div>
            <h3 className='card-heading'>Detailed Records</h3>
            <p className='card-content'>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
          </div>
          <div className='card'>
            <div className='card-img'>
              <img alt='graph image' src={iconFullyCustomizable} />
            </div>
            <h3 className='card-heading'>Fully Customizable</h3>
            <p className='card-content'>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
          </div>
        </div>

        <div className='cta' style={{ backgroundImage: `url(${isMobile ? bgBoostMobile : bgBoostDesktop})`, backgroundColor: 'hsl(257, 27%, 26%)' }}>
          <h3 className='cta-heading'>Boost your links today</h3>
          <button className='btn-round'>Get Started</button>
        </div>
      </section>

      <footer className='footer' style={{ background: 'violet' }}>
        <div className='logo-container'></div>
        <h5>Features</h5>
        <p>Link Shortening</p>
        <p>Branded Links</p>
        <p>Analytics</p>
        <h5>Resources</h5>
        <p>Blog</p>
        <p>Developers</p>
        <p>Support</p>
        <h5>Company</h5>
        <p>About</p>
        <p>Our Team</p>
        <p>Careers</p>
        <p>Contact</p>
        <div className='social-links'>
          <span>facebook | </span>
          <span>twitter | </span>
          <span>pinterest | </span>
          <span>instagram</span>
        </div>
      </footer>
    </>
  )
}

export default App
