/* eslint-disable react-hooks/exhaustive-deps */
import TopMenu from '../TopMenu/TopMenu.js';
import { useEffect } from 'react';
import { getToken } from '../../services/shortlyService';
import { useNavigate } from 'react-router-dom';

export default function PrivatePage({ children }) {
  const navigate = useNavigate();
  useEffect(() => {
    const token = getToken();
    if (!token) {
      navigate('/');
    }
  }, []);

  return (
    <>
      <TopMenu />
      {children}
    </>
  );
}
