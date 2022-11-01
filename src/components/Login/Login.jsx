import './Login.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { actionLoginAsync } from '../../store/storeThunk/actionCreaters';

function Login() {
  const dispatch = useDispatch();
  const { error } = useSelector(state => state.userReducer);
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const buttonSubmitHandler = () => {
    dispatch(actionLoginAsync({email, password}));
  }

  const emailInputHandler = (e) => {
    setEmail(e.target.value);
  }

  const passwordInputHandler = (e) => {
    setPassword(e.target.value);
  }

  return (
    <div className='login'>
      <div className='login__wrapper'>
        {
          error && <div className='login__error'>Error: {error}</div>
        }

        <label htmlFor='email'>
          <span className='login__span'>Email:</span>
          <input className='login__input' id='email' type='text' value={email} onChange={emailInputHandler}/>
        </label>

        <label htmlFor='password'>
          <span className='login__span'>Password:</span>
          <input className='login__input' id='password' type='text' value={password} onChange={passwordInputHandler}/>
        </label>
      </div>

      <button className='login__submit' onClick={() => {buttonSubmitHandler()}}>Submit</button>
    </div>
  );
}

export default Login;
