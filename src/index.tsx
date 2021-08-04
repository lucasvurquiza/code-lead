import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ApplicationProvider } from './context/Application/ApplicationProvider';
import { ModalProvider } from './context/Modal/ModalProvider';
import { MainPage } from './pages/MainPage';
import { SigninPage } from './pages/SigninPage';
import { PrivateRoute } from './routes/private/PrivateRoute';
import './styles.css';

ReactDOM.render(
  <BrowserRouter>
    <ApplicationProvider>
      <Switch>
        <Route path="/" component={SigninPage} exact />
        <ModalProvider>
          <PrivateRoute path="/mainPage" component={MainPage} exact />
        </ModalProvider>
      </Switch>
    </ApplicationProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
