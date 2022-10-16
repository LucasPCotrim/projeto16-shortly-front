import styled from 'styled-components';

export const TopMenuStyle = styled.div`
  width: 100vw;
  height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo-container {
    margin-left: 50px;
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
  .links-container {
    height: 100%;
    display: flex;
    align-items: center;
    > a,
    a:visited {
      text-decoration: none;
      color: var(--primary-color);
    }
    .option {
      margin-right: 30px;
      font-size: 20px;
      letter-spacing: 1.5px;
      cursor: pointer;
      &:hover {
        color: var(--tertiary-color);
      }
    }
  }
  @media (max-width: 500px) {
    .links-container {
      justify-content: space-between;
    }
    .option {
      font-size: 16px;
      margin-right: 0;
      letter-spacing: 1px;
    }
    .logo-name {
      font-size: max(calc(2.8169014084507vw + 19.577464788732px), 42px);
      .logo-icon {
        font-size: calc(0.777 * max(calc(2.8169014084507vw + 19.577464788732px), 42px));
      }
    }
    .logo-slogan {
      font-size: calc(0.222 * max(calc(2.8169014084507vw + 19.577464788732px), 42px));
    }
  }
`;
