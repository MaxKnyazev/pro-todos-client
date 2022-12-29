import './Admin.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { actionGetAllUsersAsync, actionDeleteUserAsync, actionEditUserAsync } from '../../store/storeThunk/adminActionCreaters';

function Admin() {
  const dispatch = useDispatch();
  const {users, isLoading} = useSelector(store => store.adminReducer);
  console.log('================================')
  console.log(users);

  useEffect(() => {
    dispatch(actionGetAllUsersAsync());
  }, [dispatch])

  const buttonDeleteHandler = (id) => {
    dispatch(actionDeleteUserAsync(id));
  }

  const buttonEditHandler = (id, role) => {
    let newRole = role === 'admin' ? 'user' : 'admin';
    dispatch(actionEditUserAsync(id, newRole));
  }

  return (
    <div className='admin'>
      {
        isLoading && <div className='admin__loader'>Loading...</div>
      }

      <ul className='admin__users users'>
        {users.map(user => (
          <li key={user.users_id} className='users__item'>
            <span className='users__id'><b>Id:</b> {user.users_id}</span>
            <span className='users__email'><b>Email:</b> {user.email}</span>
            <span className='users__role'><b>Role:</b> {user.role}</span>
            <button onClick={() => buttonDeleteHandler(user.users_id)} className='users__button'>Delete</button>
            <button onClick={() => buttonEditHandler(user.users_id, user.role)} className='users__button'>Change role</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Admin;


// <li className='users__item'>
// <span className='users__email'><b>Email:</b> User123@mail.ru</span>
// <span className='users__role'><b>Role:</b> Admin</span>
// <button className='users__button'>Delete</button>
// <button className='users__button'>Change role</button>
// </li>

// <li className='users__item'>
// <span className='users__email'><b>Email:</b> User123@mail.ru</span>
// <span className='users__role'><b>Role:</b> Admin</span>
// <button className='users__button'>Delete</button>
// <button className='users__button'>Change role</button>
// </li>

// <li className='users__item'>
// <span className='users__email'><b>Email:</b> User123@mail.ru</span>
// <span className='users__role'><b>Role:</b> Admin</span>
// <button className='users__button'>Delete</button>
// <button className='users__button'>Change role</button>
// </li>