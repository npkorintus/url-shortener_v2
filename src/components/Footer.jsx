import React from 'react';

import iconFacebook from '../assets/images/icon-facebook.svg';
import iconInstagram from '../assets/images/icon-instagram.svg';
import iconPinterest from '../assets/images/icon-pinterest.svg';
import iconTwitter from '../assets/images/icon-twitter.svg';

function Footer() {
  return (
    <footer className='footer' style={{ background: 'hsl(260, 8%, 14%)' }}>
      <div className='logo-container'>
        {/* <img className='header-image' alt='shortly logo' src={shortlyLogo} /> */}
        <h2 style={{ color: 'white' }}>Shortly</h2>
      </div>
      <div className='list'>
        <div className='sublist'>
          <h4 style={{ margin: 0, color: 'white' }}>Features</h4>
          <p>Link Shortening</p>
          <p>Branded Links</p>
          <p>Analytics</p>
        </div>
        <div className='sublist'>
          <h4 style={{ margin: 0, color: 'white' }}>Resources</h4>
          <p>Blog</p>
          <p>Developers</p>
          <p>Support</p>
        </div>
        <div className='sublist'>
          <h4 style={{ margin: 0, color: 'white' }}>Company</h4>
          <p>About</p>
          <p>Our Team</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>
      </div>
      <div className='social-links'>
        <i className='social-icon'><img src={iconFacebook} /></i>
        <i className='social-icon'><img src={iconTwitter} /></i>
        <i className='social-icon'><img src={iconPinterest} /></i>
        <i className='social-icon'><img src={iconInstagram} /></i>
      </div>
    </footer>
  );
}

export default Footer;
