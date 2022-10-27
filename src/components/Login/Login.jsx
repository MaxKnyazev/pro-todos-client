import './Login.scss';
import { useDispatch } from 'react-redux';
import { actionLoginAsync } from '../../store/storeThunk/actionCreaters';

function Login() {
  const dispatch = useDispatch();

  const buttonSubmitHandler = (email, password) => {
    dispatch(actionLoginAsync({email, password}));
  }

  return (
    <div className='login'>
      <div className='login__wrapper'>
        <label htmlFor='email'>
          <span className='login__span'>Email:</span>
          <input className='login__input' id='email' type='text'/>
        </label>

        <label htmlFor='password'>
          <span className='login__span'>Password:</span>
          <input className='login__input' id='password' type='text'/>
        </label>
      </div>

      <button className='login__submit' onClick={() => {buttonSubmitHandler('5@5.ru', '55555')}}>Submit</button>
    </div>
  );
}

export default Login;
