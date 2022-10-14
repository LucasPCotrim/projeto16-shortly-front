import { LoginPageStyle, FormStyle } from './LoginPage.style';
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { setToken, login } from '../../services/shortlyService';
import UserContext from '../../contexts/UserContext';

export default function LoginPage() {
  const { user, setUser } = useContext(UserContext);

  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleForm = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const clearForm = () => {
    setForm({
      email: '',
      password: '',
    });
  };
  const executeSignUp = (event) => {
    event.preventDefault();
    const promise = login(form);
    promise
      .then((res) => {
        setToken(res.data.token, user, setUser);
        setUser({ ...user, email: form.email });
        clearForm();
        navigate('/main');
      })
      .catch((res) => {
        alert(res.response?.data?.message || 'Error when connecting to the database');
        clearForm();
      });
  };
  return (
    <>
      <LoginPageStyle>
        <div className='image-container'>
          <div className='title-container'>
            <h1>Welcome back!</h1>
          </div>
          <img
            src='https://images.unsplash.com/photo-1515376318826-794748976251?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
            alt='Background landscape'
          />
        </div>
        <div className='form-container'>
          <FormStyle onSubmit={executeSignUp}>
            <h1>Login</h1>
            <input
              type='email'
              name='email'
              placeholder='Email'
              value={form.email}
              onChange={handleForm}
            />
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={form.password}
              onChange={handleForm}
            />
            <button>
              <h2>Enter</h2>
            </button>
            <Link to='/sign-up'>
              <div className='sign-up-link'>
                <h2>Don't have an account?</h2>
                <span>Sign-up!</span>
              </div>
            </Link>
          </FormStyle>
        </div>
      </LoginPageStyle>
    </>
  );
}
