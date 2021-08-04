import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ApplicationProvider } from './context/Application/ApplicationProvider';
import { MainPage } from './pages/MainPage';
import { SigninPage } from './pages/SigninPage';
import { PrivateRoute } from './routes/private/PrivateRoute';
import './styles.css';

ReactDOM.render(
  <BrowserRouter>
    <ApplicationProvider>
      <Switch>
        <Route path="/" component={SigninPage} exact />
        <PrivateRoute path="/mainPage" component={MainPage} exact />
      </Switch>
    </ApplicationProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
