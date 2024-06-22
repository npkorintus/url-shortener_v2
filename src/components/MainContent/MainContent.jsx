import React from 'react';

import iconBrandRecognition from '../../assets/images/icon-brand-recognition.svg';
import iconDetailedRecords from '../../assets/images/icon-detailed-records.svg';
import iconFullyCustomizable from '../../assets/images/icon-fully-customizable.svg';

import bgBoostMobile from '../../assets/images/bg-boost-mobile.svg';
import bgBoostDesktop from '../../assets/images/bg-boost-desktop.svg';

import urls from '../../../mockData';

// import '../../App.css';
import './MainContent.css';

const cards = [
  { image: '', heading: '', content: ''},
  { image: '', heading: '', content: ''},
  { image: '', heading: '', content: ''}
];

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
}

function MainContent(props) {
  console.log('props: ', props)
  const { isMobile } = props;
  console.log('mainContent isMobile: ', isMobile)
  console.log('urls: ', urls)

  return (
    <section className='main-content'>
      <div className='url-list'>url list</div>
      {urls.length > 0 && urls.map((url, index) => (
        <div key={index} className='url-card'
          // style={{ width: '100%' }}
        >
          {/* <div>{url.originalUrl}</div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div>{url.shortenedUrl}</div>
            <button className='btn-copy' onClick={() => navigator.clipboard.writeText(url.shortenedUrl)}>Copy</button>
          </div> */}
          <div className='long-url'>{url.originalUrl}</div>
          {isMobile && <hr />}
          <div className='short-url' style={{ width: '40%', textAlign: 'right' }}>{url.shortenedUrl}</div>
          <div className='copy-btn-container'
            // style={{ width: '15%' }}
          >
            <button style={{ width: isMobile ? '100%' : '120px' }} className='btn-copy' onClick={() => navigator.clipboard.writeText(url.shortenedUrl)}>Copy</button>
          </div>
        </div>
      ))}
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
        <div className='cta-content'>
          <h3 className='cta-heading'>Boost your links today</h3>
          <button className='btn-round'>Get Started</button>
        </div>
      </div>
    </section>
  );
}

export default MainContent;
