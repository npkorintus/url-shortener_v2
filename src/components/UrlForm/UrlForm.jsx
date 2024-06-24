import React, { useState } from 'react';

import bgShortenMobile from '../../assets/images/bg-shorten-mobile.svg';
import bgShortenDesktop from '../../assets/images/bg-shorten-desktop.svg';

import './UrlForm.css';

function UrlForm(props) {
  const { isMobile, setUrlList } = props;
  const [input, setInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    fetch('/api/v1/shorten', { method: form.method, body: formData })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok.`);
        }
        console.log('response: ', response)
        return response.json();
      })
      .then(data => {
        console.log(data)
        setUrlList((prevUrls) => [...prevUrls, { longUrl: input, shortUrl: data.result_url }]);
      })
      .catch(error => console.error('Error: ', error));
  }

  return (
    <section className='form-container' style={{ background: `url(${isMobile ? bgShortenMobile : bgShortenDesktop})`, backgroundColor: 'hsl(257, 27%, 26%)' }}>
      <form method='post' className='url-form' onSubmit={handleSubmit}>
        <div className='input-container'>
          <input
            className='url-input'
            type='text'
            name='url'
            value={input}
            placeholder='Shorten a link here...'
            // required
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
