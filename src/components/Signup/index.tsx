/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ApplicationContext } from '../../context/Application/ApplicationContext';
import './styles.css';

export const Signup = () => {
  const {setIsLogin, setUserName, isLogin} = useContext(ApplicationContext);
  const [userNameInput, setUserNameInput] = useState('');
  const history = useHistory();

  const onClickSignin = () => {
    console.log(isLogin);
    setUserName(userNameInput);
    setIsLogin(!isLogin);
    history.push('mainPage');
  }

  return (
    <>
      <div className='divSignup'>
        <h1>Welcome to CodeLeap network!</h1>
        <h3>Please enter your username</h3>
        <input 
          type="text" 
          placeholder={'John doe'} 
          onChange={(e) => setUserNameInput(e.target.value)}/>
        <br />
        <button 
          disabled={!userNameInput.trim() ? true : false} 
          onClick={() => onClickSignin()}
        >
          ENTER
        </button>
      </div>
    </>
  );
};