import styled, { keyframes } from 'styled-components';

const fadeInAnimation = keyframes`
  from {
    opacity: 0%;
  }
  to {
    opacity: 100%;
  }
`;

export const HomePageStyle = styled.div`
  width: 100vw;
  height: 100vh;
  .logo-container {
    position: absolute;
    top: 50px;
    left: 50px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    .logo-name {
      display: flex;
      align-items: center;
      gap: 20px;
      font-family: Playball;
      font-size: max(calc(2.8169014084507vw + 19.577464788732px), 48px);
      cursor: pointer;
      .logo-icon {
        height: 100%;
        display: flex;
        align-items: flex-end;
        font-size: calc(0.777 * max(calc(2.8169014084507vw + 19.577464788732px), 48px));
      }
    }
    .logo-slogan {
      margin-top: 12px;
      font-size: calc(0.222 * max(calc(2.8169014084507vw + 19.577464788732px), 48px));
      letter-spacing: 2px;
    }
  }
`;

export const ImagesContainerStyle = styled.div`
  position: absolute;
  top: 25%;
  right: 10%;
  height: 60%;
  width: min(80%, 1200px);
  @media (max-width: 1000px) {
    top: 25%;
    right: 5%;
    height: 60%;
    width: 90%;
  }
  > img {
    position: absolute;
    border-radius: 15px;
    object-fit: cover;
    opacity: 0%;
    animation-name: ${fadeInAnimation};
    animation-duration: 3s;
    animation-fill-mode: forwards;
  }
  > img:nth-child(1) {
    width: calc(50% - 5px);
    height: calc(30% - 5px);
    top: 0;
    left: 0;
    animation-delay: 0.2s;
  }
  > img:nth-child(2) {
    width: calc(50% - 5px);
    height: 60%;
    top: 0;
    right: 0;
    animation-delay: 0.6s;
  }
  > img:nth-child(3) {
    width: calc(50% - 5px);
    height: calc(30% - 5px);
    top: calc(30% + 5px);
    left: 0;
    animation-delay: 1s;
  }
  > img:nth-child(4) {
    width: 100%;
    height: calc(40% - 10px);
    bottom: 0;
    right: 0;
    animation-delay: 1.4s;
  }
`;

export const TopMenuStyle = styled.div`
  position: absolute;
  top: 50px;
  right: 50px;
  width: 60%;
  height: 90px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  > a,
  a:visited {
    text-decoration: none;
    color: var(--primary-color);
  }

  .option {
    margin-right: 40px;
    font-size: 25px;
    letter-spacing: 2px;
    cursor: pointer;
    &:hover {
      color: var(--tertiary-color);
    }
  }
  @media (max-width: 800px) {
    width: 50%;
    .option {
      font-size: 18px;
    }
  }
`;
