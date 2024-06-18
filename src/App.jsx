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

import iconFacebook from './assets/images/icon-facebook.svg';
import iconInstagram from './assets/images/icon-instagram.svg';
import iconPinterest from './assets/images/icon-pinterest.svg';
import iconTwitter from './assets/images/icon-twitter.svg';

import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import UrlForm from './components/UrlForm';

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [input, setInput] = useState('');

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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('input: ', input)
  }

  return (
    <>
      <Header />
      <Hero />

      <UrlForm isMobile={isMobile} />

      {/* <section className='url-list' style={{ background: 'yellow' }}></section> */}

      <MainContent isMobile={isMobile} />
      <Footer />
    </>
  )
}

export default App
