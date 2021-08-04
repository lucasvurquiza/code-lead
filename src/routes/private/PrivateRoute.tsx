import React, {useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ApplicationContext } from '../../context/Application/ApplicationContext'

export const PrivateRoute = ({component, ...rest}: any) => {
  const {isLogin} = useContext(ApplicationContext);

  const routeComponent = (props: any) => (
    isLogin ? React.createElement(component, props) : <Redirect to='/'/>
  );

  return(
    <Route {...rest} render={routeComponent}/>
  );
}