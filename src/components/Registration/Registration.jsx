import './Registration.scss';

function Registration() {
  return (
    <div className='registration'>
      <div className='registration__wrapper'>
        <label htmlFor='email'>
          <span className='registration__span'>Email:</span>
          <input className='registration__input' id='email' type='text'/>
        </label>

        <label htmlFor='password'>
          <span className='registration__span'>Password:</span>
          <input className='registration__input' id='password' type='text'/>
        </label>

        <label htmlFor='password'>
          <span className='registration__span'>Re-enter Password:</span>
          <input className='registration__input' id='password' type='text'/>
        </label>
      </div>

      <button className='registration__submit'>Registration</button>
    </div>
  );
}

export default Registration;