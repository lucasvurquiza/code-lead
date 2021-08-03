import React from 'react';
import './styles.css';

export const Signup = () => {
  return (
    <>
      <div className='divSignup'>
        <h1>Welcome to CodeLeap network!</h1>
        <h3>Please enter your username</h3>
        <input type="text" placeholder={'John doe'}/>
        <br />
        <button>ENTER</button>
      </div>
    </>
  );
};