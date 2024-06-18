import React, { useState } from 'react';

import bgShortenMobile from '../assets/images/bg-shorten-mobile.svg';
import bgShortenDesktop from '../assets/images/bg-shorten-desktop.svg';

const baseUrl = 'https://cleanuri.com/api/v1/shorten';

function UrlForm(props) {
  const { isMobile } = props.isMobile;
  const [input, setInput] = useState('');

  const shortenUrl = async() => {
    const postData = {
      // headers: {
      //   "Access-Control-Allow-Origin": "*",
      //   "Content-Type": "application/json"
      // },
      // method: 'POST',
      mode:  'no-cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url: input })
    }

    try {
      const response = fetch(baseUrl, postData);

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      const data = await response.json();
      console.log('data: ', data)
    } catch (error) {
      console.error(`Error: ${error}`)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('input: ', input)

    shortenUrl();
  }

  return (
    <section className='form-container' style={{ background: `url(${isMobile ? bgShortenMobile : bgShortenDesktop})`, backgroundColor: 'hsl(257, 27%, 26%)' }}>
      <form className='url-form' onSubmit={handleSubmit}>
        <div className='input-container'>
          <input
            className='url-input'
            type='text'
            name='urlInput'
            value={input}
            placeholder='Shorten a link here...'
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className='submit-container'>
          <button className='btn-submit' type='submit'>Shorten It!</button>
        </div>
      </form>
    </section>
  );
}

export default UrlForm;
