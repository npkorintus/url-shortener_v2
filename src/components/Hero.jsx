import React from 'react';

import illustrationWorking from '../assets/images/illustration-working.svg';

function Hero() {
  return (
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
  );
}

export default Hero;
