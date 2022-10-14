import GlobalStyle from './global/GlobalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/sign-up' element={<h1>SignUpPage</h1>} />
          <Route path='/login' element={<h1>LoginPage</h1>} />
          <Route path='/ranking' element={<h1>RankingPage</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

