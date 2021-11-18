import './App.scss';
import 'swiper/swiper.min.css';
import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";


import ClientTemplate from './layouts/Client/ClientTemplate';
import PageErrors from './layouts/Pages/PageErrors';
import { clientRoutes, adminRoutes } from './routes/route';
import LoginAdminComponent from './layouts/Admin/Login/LoginAdminComponent';
import AdminTemplate from './layouts/Admin/AdminTemplate';
import { ACCESS_TOKEN } from './Settings/configUrl';
function App() {
  const token = localStorage.getItem(ACCESS_TOKEN);
  const renderRoute = (route, Layout) => {
    
    return route.map((item, index) => {
      if (item.auth) {
        return token  ? <Layout exact path={item.path} component={item.component} key={index} /> : ''
      }
      return <Layout exact path={item.path} component={item.component} key={index} />
    });
  }
  const authenticated = () => {
    if(token && token !== '') {
      return true;
    }
    return false;
  }
  return (
    <Router>
      <Switch>
      {
          authenticated() ?
            renderRoute(adminRoutes, AdminTemplate) :
            ''
        }
        {
          renderRoute(clientRoutes, ClientTemplate)
        }
        <Route exact path="/admin" component={LoginAdminComponent} />
        
        <Route exact path="*" component={PageErrors} />
      </Switch>
    </Router>
  );
}

export default App;
