import styled from 'styled-components';

export const LoginPageStyle = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  .image-container {
    position: relative;
    width: 45%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .title-container {
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      > h1 {
        font-size: 44px;
      }
      > h2 {
        margin-top: 12px;
        font-size: 22px;
      }
    }
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 55%;
    height: 100%;
    margin-top: 100px;
  }
  @media (max-width: 1100px) {
    flex-direction: column;
    .image-container {
      height: 400px;
      width: 100%;
    }
    .form-container {
      height: calc(100vh - 400px);
      width: 100%;
      margin-top: 60px;
    }
  }
`;

export const FormStyle = styled.form`
  position: relative;
  width: min(800px, 90%);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 18px;
  > h1 {
    width: 100%;
    font-size: 30px;
    line-height: 30px;
    margin-bottom: 50px;
    @media (max-width: 1100px) {
      margin-bottom: 30px;
    }
  }
  > input {
    width: 100%;
    height: 58px;
    background-color: var(--primary-color);
    border-radius: 8px;
    box-shadow: 1px 1px 3px 1px black;
    font-size: 20px;
    line-height: 23px;
    color: var(--quaternary-color);
    padding-left: 15px;
    outline: none;
    &::placeholder {
      font-size: 20px;
      line-height: 23px;
      color: var(--tertiary-color);
    }
    &:focus::placeholder {
      color: transparent;
    }
  }
  button {
    margin-top: 40px;
    align-self: flex-end;
    width: 30%;
    height: 58px;
    background-color: var(--tertiary-color-alt);
    border: none;
    border-radius: 8px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
      background-color: var(--tertiary-color);
    }
    h2 {
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 23px;
      color: var(--primary-color);
    }
    &:disabled {
      background-color: var(--primary-color);
      cursor: initial;
      h2 {
        color: var(--tertiary-color);
      }
    }
  }
  .sign-up-link {
    position: absolute;
    bottom: 20px;
    left: 10px;
    display: flex;
    font-size: 20px;
    line-height: 30px;
    color: var(--secundary-color);
    h2 {
      margin-right: 10px;
    }
    span {
      text-decoration: underline;
      color: var(--secundary-color);
      cursor: pointer;
      &:hover {
        color: var(--tertiary-color);
      }
    }
  }
  a {
    text-decoration: none;
  }
`;
