import React from 'react';

import shortlyLogo from '../assets/images/logo.svg';

function Header() {
  return (
    <header className='header'>
        <div className='logo-container align-left' style={{ padding: 0 }}>
          <img className='header-image' alt='shortly logo' src={shortlyLogo} />
        </div>
        {/* Todo: nav links with login/signup */}
      </header>
  );
}

export default Header;
