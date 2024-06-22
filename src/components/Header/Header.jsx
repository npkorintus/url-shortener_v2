import React from 'react';

import shortlyLogo from '../../assets/images/logo.svg';

import './Header.css';

function Header() {
  return (
    <header className='header'>
        <div className='header-logo-container align-left'>
          <img className='header-image' alt='shortly logo' src={shortlyLogo} />
        </div>
        {/* Todo: nav links with login/signup */}
      </header>
  );
}

export default Header;
