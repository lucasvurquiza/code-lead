import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './pages/App';
import './styles.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact>
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
