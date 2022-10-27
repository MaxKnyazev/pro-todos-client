import './Header.scss';
import { useSelector } from 'react-redux';

function Header() {
  let { isAuth, user } = useSelector(state => state.userReducer);
  let isAdmin = user.role === 'admin' ? true : false;

  return (
    <>
      <header className='header'>
        <h1 className='header__title'>Todos</h1>

        <div className="header__profile profile">
          {
            isAuth ? (
              <div className='profile'>
                <div className='profile__username username'>
                  <span className='username__span'>{user.email}</span>
                  <div className='username__underline'></div>
                </div>
                <button className='profile__button'>Logout</button>
                {isAdmin && <button className='profile__button profile__button--admin'>Settings</button>}
              </div>
            ) : (
              <div className='profile'>
                <button className='profile__button'>Login</button>
                <button className='profile__button'>Registration</button>
              </div>
            )
          }
        </div>
      </header>

      <div className="header__underline"></div>
    </>
  );
}

export default Header;
