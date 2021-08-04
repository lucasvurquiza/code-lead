import { createContext } from 'react';

interface IApplicationContext {
  setIsLogin: (value: boolean) => void;
  isLogin: boolean;
  userName: string;
  setUserName: (value: string) => void;
  setCallFetch: (value: boolean) => void;
  callFetch: boolean;
}

export const ApplicationContext = createContext({} as IApplicationContext);
