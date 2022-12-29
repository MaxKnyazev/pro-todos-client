import './AdminPage.scss';
import Admin from '../../components/Admin';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function AdminPage() {
  let { isAuth, user } = useSelector(state => state.userReducer);
  let isAdmin = user.role === 'admin';
  console.log(isAuth && isAdmin);

  return (
    <section className='adminpage page'>
    {
      isAuth && isAdmin
      ? <Admin />
      : <Navigate to='/todos' replace={true} />
    }
    </section>
  );
}

export default AdminPage;
