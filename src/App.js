import GlobalStyle from './global/GlobalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import SignUpPage from './components/SignUpPage/SignUpPage';
import LoginPage from './components/LoginPage/LoginPage';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/sign-up' element={<SignUpPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/ranking' element={<h1>RankingPage</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

