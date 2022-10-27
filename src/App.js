import './App.scss';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import AdminPage from './pages/AdminPage';
import NotFoundPage from './pages/NotFoundPage';
import TodosPage from './pages/TodosPage';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { useSelector } from 'react-redux';

function App() {
  let { isAuth, user } = useSelector(state => state.userReducer);
  let isAdmin = user.role === 'admin' ? true : false;

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        { !isAuth && <Route index element={<HomePage />}/> }
        { isAuth && <Route index element={<TodosPage />}/> }
        <Route path='/auth/login' element={<LoginPage />}/>
        <Route path='/auth/registration' element={<RegistrationPage />}/>
        <Route path='/todos' element={<TodosPage />}/>
        <Route path='/admin' element={<AdminPage />}/>
        <Route path='*' element={<NotFoundPage />}/>
      </Route>
    </Routes>
  );
}


export default App;
