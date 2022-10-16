/* eslint-disable react-hooks/exhaustive-deps */
import { MainPageStyle, MyLinksContainerStyle } from './MainPage.style';
import { useState, useContext, useEffect } from 'react';
import UserContext from '../../contexts/UserContext';
import { deleteToken, getUserInfo, shortenURL, deleteURL } from '../../services/shortlyService';
import { useNavigate } from 'react-router-dom';
import { RiDeleteBin5Fill } from 'react-icons/ri';

const maxUrlLength = 30;

function UrlWrapper({ id, url, shortUrl, visitCount }) {
  const { user, setUser } = useContext(UserContext);
  const cutUrl = url.length > maxUrlLength ? url.substring(0, maxUrlLength) + '...' : url;

  const deleteUrl = (id) => {
    const promise = deleteURL(id);
    promise
      .then(() => {
        const promise = getUserInfo();
        promise
          .then((res) => {
            setUser({
              ...user,
              userInfo: {
                name: res.data.name,
                visitCount: res.data.visitCount,
                shortenedUrls: res.data.shortenedUrls,
              },
            });
            console.log(user);
          })
          .catch((res) => {
            alert(res.response?.data?.message || 'Error when connecting to the database');
          });
      })
      .catch((res) => {
        alert(res.response?.data?.message || 'Error when connecting to the database');
      });
  };
  return (
    <>
      <div className='url-wrapper'>
        <div className='url'>
          <a href={url} target='_blank' rel='noreferrer'>
            {cutUrl}
          </a>
        </div>
        <div className='short-url'>{shortUrl}</div>
        <div className='visit-count'>Visit count: {visitCount}</div>
        <div className='delete-button'>
          <RiDeleteBin5Fill onClick={() => deleteUrl(id)} />
        </div>
      </div>
    </>
  );
}

function LinksContainer({ userInfo }) {
  const nLinks = userInfo?.shortenedUrls.length || 0;
  const urls = userInfo?.shortenedUrls;
  console.log(userInfo);
  console.log(nLinks);
  console.log(urls);
  if (nLinks === 0) {
    return (
      <>
        <h2>You don't have any URLs. Create one above!</h2>
      </>
    );
  }
  return (
    <>
      <MyLinksContainerStyle>
        <h1>Hello {userInfo?.name}!</h1>
        <h2>You have {nLinks} URLs</h2>
        <div className='urls-container'>
          {urls.map((url, index) => (
            <UrlWrapper
              key={index}
              id={url.id}
              url={url.url}
              shortUrl={url.shortUrl}
              visitCount={url.visitCount}
            />
          ))}
        </div>
      </MyLinksContainerStyle>
    </>
  );
}

export default function MainPage() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [urlToShorten, setUrlToShorten] = useState('https://');

  useEffect(() => {
    const promise = getUserInfo();
    promise
      .then((res) => {
        setUser({
          ...user,
          userInfo: {
            name: res.data.name,
            visitCount: res.data.visitCount,
            shortenedUrls: res.data.shortenedUrls,
          },
        });
        console.log(user);
      })
      .catch((res) => {
        alert(res.response?.data?.message || 'Error when connecting to the database');
        if (res.response?.status === 401) {
          deleteToken();
          navigate('/');
        }
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
      .then(() => {
        const promise = getUserInfo();
        promise
          .then((res) => {
            setUser({
              ...user,
              userInfo: {
                name: res.data.name,
                visitCount: res.data.visitCount,
                shortenedUrls: res.data.shortenedUrls,
              },
            });
            console.log(user);
          })
          .catch((res) => {
            alert(res.response?.data?.message || 'Error when connecting to the database');
            if (res.response?.status === 401) {
              deleteToken();
              navigate('/');
            }
          });
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
        <LinksContainer userInfo={user?.userInfo} />
      </MainPageStyle>
    </>
  );
}
