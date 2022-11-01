import './Header.scss';
import { useSelector, useDispatch } from 'react-redux';
import { actionLogout } from '../../store/storeThunk/actionCreaters';
import { NavLink } from 'react-router-dom';

function Header() {
  let { isAuth, user } = useSelector(state => state.userReducer);
  let isAdmin = user.role === 'admin' ? true : false;
  const dispatch = useDispatch();

  const logoutHander = () => {
    dispatch(actionLogout());
    localStorage.removeItem('token');
  }

  return (
    <>
      <header className='header'>
        <NavLink to='/'><h1 className='header__title'>Todos</h1></NavLink>

        <div className="header__profile profile">
          {
            isAuth ? (
              <div className='profile'>
                <div className='profile__username username'>
                  <span className='username__span'>{user.email}</span>
                  <div className='username__underline'></div>
                </div>
                <button className='profile__button' onClick={logoutHander}>Logout</button>
                {isAdmin && <NavLink className='profile__button profile__button--admin' to='/admin'>Settings</NavLink>}
              </div>
            ) : (
              <div className='profile'>
                <NavLink className='profile__button' to='/auth/login'>Login</NavLink>
                <NavLink className='profile__button' to='/auth/registration'>Registration</NavLink>
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
