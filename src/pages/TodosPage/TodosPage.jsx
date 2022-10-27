import './TodosPage.scss';
import Todos from '../../components/Todos';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function TodosPage() {
  const { isAuth } = useSelector(state => state.userReducer);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate]);

  return (
    <section className='todospage page'>
      <Todos />
    </section>
  );
}

export default TodosPage;