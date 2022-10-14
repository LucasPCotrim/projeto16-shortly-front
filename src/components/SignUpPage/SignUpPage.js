import { SignUpPageStyle, FormStyle } from './SignUpPage.style';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signUp } from '../../services/shortlyService.js';

export default function SignUpPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
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
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
      favGenres: [],
    });
  };
  const executeSignUp = (event) => {
    event.preventDefault();
    const promise = signUp(form);
    promise
      .then(() => {
        clearForm();
        navigate('/login');
      })
      .catch((res) => {
        alert(res.response?.data?.message || 'Error when connecting to the database');
        clearForm();
      });
  };

  return (
    <>
      <SignUpPageStyle>
        <div className='image-container'>
          <div className='title-container'>
            <h1>Creation starts here</h1>
            <h2>Shorten URLs, share with everyone</h2>
          </div>
          <img
            src='https://images.unsplash.com/photo-1435732960391-11053ee5e6b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80'
            alt='Background landscape'
          />
        </div>
        <div className='form-container'>
          <FormStyle onSubmit={executeSignUp}>
            <h1>Sign Up for free</h1>
            <input
              type='text'
              name='name'
              placeholder='Name'
              value={form.name}
              onChange={handleForm}
            />
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
            <input
              type='password'
              name='confirmPassword'
              placeholder='Confirm password'
              value={form.confirmPassword}
              onChange={handleForm}
            />
            <button>
              <h2>Join</h2>
            </button>
            <Link to='/login'>
              <div className='login-link'>
                <h2>Already have an account?</h2>
                <span>Login</span>
              </div>
            </Link>
          </FormStyle>
        </div>
      </SignUpPageStyle>
    </>
  );
}
