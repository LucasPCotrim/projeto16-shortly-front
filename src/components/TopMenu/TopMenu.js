import { TopMenuStyle } from './TopMenu.style';
import { Link } from 'react-router-dom';
import { GiUnderwearShorts } from 'react-icons/gi';

export default function TopMenu() {
  return (
    <>
      <TopMenuStyle>
        <div className='logo-container'>
          <div className='logo-name'>
            Shortly
            <div className='logo-icon'>
              <GiUnderwearShorts />
            </div>
          </div>
          <div className='logo-slogan'>Short links. For everyone</div>
        </div>
        <div className='links-container'>
          <Link to='/main'>
            <div className='option'>Home</div>
          </Link>
          <Link to='/ranking'>
            <div className='option'>Ranking</div>
          </Link>
          <div className='option'>Sign out</div>
        </div>
      </TopMenuStyle>
    </>
  );
}
