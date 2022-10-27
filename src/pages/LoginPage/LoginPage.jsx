import './LoginPage.scss';
import Login from '../../components/Login';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function LoginPage() {
  const { isAuth } = useSelector(state => state.userReducer);
  return (
    <section className='loginpage page'>
      {
        isAuth
        ? <Navigate to='/todos' replace={true} />
        : <Login />
      }
    </section>
  );
}

export default LoginPage;







// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';
// import Login from '../components/Login';
// import './LoginPage.css';

// const LoginPage = () => {
// const { isAuth } = useSelector((state) => state.userState);
// return (
// <div className='container'>
// {
// isAuth
// ? <Navigate to='/todos' replace={true} />
// : <Login />
// }
// </div>
// );
// };

// export default LoginPage;