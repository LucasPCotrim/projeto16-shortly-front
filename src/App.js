import GlobalStyle from './global/GlobalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import SignUpPage from './components/SignUpPage/SignUpPage';
import LoginPage from './components/LoginPage/LoginPage';
import MainPage from './components/MainPage/MainPage';
import PrivatePage from './components/PrivatePage/PrivatePage';
import UserContext from './contexts/UserContext';
import { useState } from 'react';

export default function App() {
  const [user, setUser] = useState({
    name: '',
  });

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/sign-up' element={<SignUpPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route
              path='/main'
              element={
                <PrivatePage>
                  <MainPage />
                </PrivatePage>
              }
            />
            <Route
              path='/ranking'
              element={
                <PrivatePage>
                  <h1>RankingPage</h1>
                </PrivatePage>
              }
            />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

