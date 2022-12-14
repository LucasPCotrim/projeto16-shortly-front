/* eslint-disable react-hooks/exhaustive-deps */
import { HomePageStyle, ImagesContainerStyle, TopMenuStyle } from './HomePage.style';
import { GiUnderwearShorts } from 'react-icons/gi';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getToken } from '../../services/shortlyService';
const homePageImages = [
  'https://images.unsplash.com/photo-1565870100382-f0a510db3cd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
  'https://images.unsplash.com/photo-1622556498246-755f44ca76f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
  'https://images.unsplash.com/photo-1587573088942-300aeee98aa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1326&q=80',
  'https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
];

export default function HomePage() {
  const navigate = useNavigate();
  useEffect(() => {
    if (getToken()) {
      navigate('/main');
    }
  }, []);

  return (
    <>
      <HomePageStyle>
        <div className='logo-container'>
          <div className='logo-name'>
            Shortly
            <div className='logo-icon'>
              <GiUnderwearShorts />
            </div>
          </div>
          <div className='logo-slogan'>Short links. For everyone</div>
        </div>
        <TopMenuStyle>
          <Link to='/login'>
            <div className='option'>Login</div>
          </Link>
          <Link to='/sign-up'>
            <div className='option'>Sign-up</div>
          </Link>
        </TopMenuStyle>
        <ImagesContainerStyle>
          <img src={homePageImages[0]} alt='Home page 1' />
          <img src={homePageImages[1]} alt='Home page 2' />
          <img src={homePageImages[2]} alt='Home page 3' />
          <img src={homePageImages[3]} alt='Home page 4' />
        </ImagesContainerStyle>
      </HomePageStyle>
    </>
  );
}
