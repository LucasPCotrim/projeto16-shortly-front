import styled from 'styled-components';

export const RankingPageStyle = styled.div`
  width: min(800px, 100vw);
  height: 100vh;
  padding: 30px 25px 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 40px;

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
  .users-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    > .scoreboard-labels,
    .user-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 60px;
      background-color: var(--tertiary-color);
      border-radius: 12px;
      padding: 0 30px 0 30px;
      .user-name {
        width: 30%;
        text-align: left;
      }
      .n-links {
        width: 30%;
        text-align: center;
      }
      .visit-count {
        width: 30%;
        text-align: right;
      }
    }
    > .scoreboard-labels {
      background-color: transparent;
      height: 40px;
      padding: 0;
    }
  }
`;
