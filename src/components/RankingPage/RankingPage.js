import { RankingPageStyle } from './RankingPage.style';
import { useEffect, useState } from 'react';
import { getRanking } from '../../services/shortlyService';

function RankingUserWrapper({ userName, linksCount, visitCount }) {
  return (
    <>
      <div className='user-wrapper'>
        <div className='user-name'>{userName}</div>
        <div className='n-links'>{linksCount}</div>
        <div className='visit-count'>{visitCount}</div>
      </div>
    </>
  );
}

export default function RankingPage() {
  const [ranking, setRanking] = useState([]);
  useEffect(() => {
    const promise = getRanking();
    promise
      .then((res) => {
        console.log(res);
        setRanking(res.data);
      })
      .catch((res) => {
        alert(res.response?.data?.message || 'Error when connecting to the database');
      });
  }, []);

  return (
    <>
      <RankingPageStyle>
        <h1>Shortly Ranking</h1>
        <h2>List of top 10 users</h2>
        {ranking.length === 0 ? (
          <></>
        ) : (
          <div className='users-container'>
            <div className='scoreboard-labels'>
              <div className='user-name'>Username</div>
              <div className='n-links'>Number of Links</div>
              <div className='visit-count'>Total Visits</div>
            </div>
            {ranking.map((user) => (
              <RankingUserWrapper
                userName={user.name}
                linksCount={user.linksCount}
                visitCount={user.visitCount}
              />
            ))}
          </div>
        )}
      </RankingPageStyle>
    </>
  );
}
