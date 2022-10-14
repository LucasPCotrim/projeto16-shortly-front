import { LoginPageStyle, FormStyle } from './LoginPage.style';

export default function LoginPage() {
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
          <FormStyle>
            <h1>Login</h1>
            <input type='email' name='email' placeholder='Email' />
            <input type='password' name='password' placeholder='Password' />
            <button>
              <h2>Enter</h2>
            </button>
            <div className='sign-up-link'>
              <h2>Don't have an account?</h2>
              <span>Sign-up!</span>
            </div>
          </FormStyle>
        </div>
      </LoginPageStyle>
    </>
  );
}
