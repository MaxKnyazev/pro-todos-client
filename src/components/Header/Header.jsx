import './Header.scss';

function Header() {
  let isLogin = true;
  let username = 'Username123'
  let isAdmin = true;

  return (
    <>
      <header className='header'>
        <h1 className='header__title'>Todos</h1>

        <div className="header__profile profile">
          {
            isLogin ? (
              <div className='profile'>
                <div className='profile__username username'>
                  <span className='username__span'>{username}</span>
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
