import { SignUpPageStyle, FormStyle } from './SignUpPage.style';

export default function SignUpPage() {
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
          <FormStyle>
            <h1>Sign Up for free</h1>
            <input type='text' name='name' placeholder='Name' />
            <input type='email' name='email' placeholder='Email' />
            <input type='password' name='password' placeholder='Password' />
            <input type='password' name='confirmPassword' placeholder='Confirm password' />
            <button>
              <h2>Join</h2>
            </button>
            <div className='login-link'>
              <h2>Already have an account?</h2>
              <span>Login</span>
            </div>
          </FormStyle>
        </div>
      </SignUpPageStyle>
    </>
  );
}
