import styled from 'styled-components';

export const MainPageStyle = styled.div`
  width: min(800px, 100vw);
  height: 100vh;
  padding: 70px 25px 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 50px;
  .shorten-url-container {
    width: 100%;
    > h1 {
      font-size: 24px;
      font-weight: 300;
      margin-bottom: 20px;
    }
    .input-container {
      display: flex;
      gap: 15px;
      > input {
        width: 100%;
        height: 58px;
        background-color: var(--primary-color);
        border-radius: 8px;
        font-size: 20px;
        line-height: 23px;
        color: var(--tertiary-color-alt);
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
      > button {
        width: 120px;
        height: 58px;
        background-color: var(--tertiary-color);
        border: none;
        border-radius: 8px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        &:hover {
          background-color: var(--tertiary-color-alt);
        }
        h2 {
          font-size: 17px;
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
    }
  }
`;
