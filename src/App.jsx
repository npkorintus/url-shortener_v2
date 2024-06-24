import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import UrlForm from './components/UrlForm';

import useLocalStorage from './hooks/useLocalStorage';

import './App.css';

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  // const [input, setInput] = useState('');

  const [urlList, setUrlList] = useLocalStorage("urls", []);
  // const [urlList, setUrlList] = useStickyState([], "urls");

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
      <Header />
      <Hero />
      <UrlForm isMobile={isMobile} setUrlList={setUrlList} />
      <MainContent isMobile={isMobile} urlList={urlList} />
      <Footer />
    </>
  )
}

export default App;
