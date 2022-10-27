import './Login.scss';

function Login() {
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

      <button className='login__submit'>Submit</button>
    </div>
  );
}

export default Login;
