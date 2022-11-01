import './Registration.scss';
import { useState } from 'react';
import { axiosInstance } from '../../utils/axiosInstance';
import { useNavigate } from 'react-router-dom';

function Registration() {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ doublePassword, setDoublePassword ] = useState('');
  const [ error, setError ] = useState('');

  const navigate = useNavigate();

  const emailInputHandler = (e) => {
    setEmail(e.target.value);
  }

  const passwordInputHandler = (e) => {
    setPassword(e.target.value);
  }

  const doublePasswordInputHandler = (e) => {
    setDoublePassword(e.target.value);
  }

  const isEmailValid = email => {
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    return EMAIL_REGEXP.test(email);
  }

  const checkPassword = password => {
    const numberChar = '0123456789';
    if (password.length < 5) return 'Password must be at least 5 characters';
    if (password === password.toUpperCase()) return 'Password must contain at least one small character';
    if (password === password.toLowerCase()) return 'Password must contain at least one large character';
    
    let count = 0;
    for(let i = 0; i < password.length; i++) {
      if (!numberChar.includes(password[i])) count++;
    }
    return count >= 2 && count < password.length ? '' : 'Password must contain at least one number';
  }

  const buttonSubmitHandler = async (email, password) => {
    try {
      if (!isEmailValid(email)) {
        setError(`Invalid email`);
        return;
      }
      setError('');

      const passwordError = checkPassword(password);
      if (passwordError) {
        setError(passwordError);
        return;
      }

      if (doublePassword !== password) {
        setError(`password is not equal doublePassword`);
        return;
      }

      await axiosInstance.post('/auth/registration', {
        email,
        password
      });

      navigate('/auth/login');
    } catch (error) {
      console.log(error.response.data.error);
      setError(error.response.data.error);
    }
  }

  return (
    <div className='registration'>
      <div className='registration__wrapper'>
        {
          error && <div className='registration__error'>Error: {error}</div>
        }

        <label htmlFor='email'>
          <span className='registration__span'>Email:</span>
          <input className='registration__input' id='email' type='text' value={email} onChange={emailInputHandler}/>
        </label>

        <label htmlFor='password'>
          <span className='registration__span'>Password:</span>
          <input className='registration__input' id='password' type='text' value={password} onChange={passwordInputHandler}/>
        </label>

        <label htmlFor='password'>
          <span className='registration__span'>Re-enter Password:</span>
          <input className='registration__input' id='password' type='text' value={doublePassword} onChange={doublePasswordInputHandler}/>
        </label>
      </div>

      <button className='registration__submit' onClick={() => {buttonSubmitHandler(email, password)}}>Registration</button>
    </div>
  );
}

export default Registration;