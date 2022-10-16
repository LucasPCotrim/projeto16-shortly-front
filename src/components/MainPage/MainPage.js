/* eslint-disable react-hooks/exhaustive-deps */
import { MainPageStyle } from './MainPage.style';
import { useState, useContext, useEffect } from 'react';
import UserContext from '../../contexts/UserContext';
import { getUserInfo, shortenURL } from '../../services/shortlyService';

export default function MainPage() {
  const { user, setUser } = useContext(UserContext);
  const [urlToShorten, setUrlToShorten] = useState('');

  useEffect(() => {
    const promise = getUserInfo();
    promise
      .then((res) => {
        setUser({ ...user, name: res.data.name, shortenedUrls: res.data.shortenedUrls });
        console.log(user);
      })
      .catch((res) => {
        alert(res.response?.data?.message || 'Error when connecting to the database');
      });
  }, []);

  const handleInput = (event) => {
    setUrlToShorten(event.target.value);
  };
  const clearInput = () => {
    setUrlToShorten('');
  };
  const submitUrl = () => {
    const promise = shortenURL({ url: urlToShorten });
    promise
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        alert(res.response?.data?.message || 'Error when connecting to the database');
      });
    clearInput();
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
