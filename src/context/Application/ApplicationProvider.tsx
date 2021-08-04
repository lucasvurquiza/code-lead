import React, { useState } from "react";
import {ApplicationContext} from './ApplicationContext';

export const ApplicationProvider: React.FC = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState('');
  const [callFetch, setCallFetch] = useState(true);

  return (
    <ApplicationContext.Provider
      value={{
        isLogin,
        setIsLogin,
        userName,
        setUserName,
        callFetch,
        setCallFetch
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
}