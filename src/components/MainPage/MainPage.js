import { MainPageStyle } from './MainPage.style';
import { useState } from 'react';

export default function MainPage() {
  const [urlToShorten, setUrlToShorten] = useState('');

  const handleInput = (event) => {
    setUrlToShorten(event.target.value);
  };
  const clearInput = () => {
    setUrlToShorten('');
  };
  const submitUrl = (event) => {
    clearInput();
    console.log(urlToShorten);
  };

  return (
    <>
      <MainPageStyle>
        <div className='shorten-url-container'>
          <h1>Shorten URL</h1>
          <div className='input-container'>
            <input
              type='text'
              placeholder='Your super long URL here'
              value={urlToShorten}
              onChange={handleInput}
            />
            <button onClick={submitUrl}>
              <h2>Shorten</h2>
            </button>
          </div>
        </div>
      </MainPageStyle>
    </>
  );
}
