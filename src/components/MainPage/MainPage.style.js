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

export const MyLinksContainerStyle = styled.div`
  margin-top: 40px;
  width: 100%;
  a,
  a:visited {
    color: var(--primary-color);
  }
  > h1 {
    font-size: 40px;
    margin-bottom: 20px;
  }
  > h2 {
    font-size: 22px;
    font-weight: 300;
    margin-bottom: 50px;
  }
  .urls-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    > .url-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 60px;
      background-color: var(--tertiary-color);
      border-radius: 12px;
      padding: 0 12px 0 12px;
      > .url {
        height: 18px;
        width: 40%;
        overflow: hidden;
      }
      > .short-url {
      }
      > .visit-count {
      }
      > .delete-button {
        font-size: 20px;
        color: rgb(131, 31, 7);
        cursor: pointer;
        transition: transform 0.3s;
        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }
`;
