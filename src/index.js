import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {HashRouter as Router,Route,Switch,Redirect} from "react-router-dom"
import {mainRoute} from "./router"
import "./index.less"

console.log(mainRoute)
ReactDOM.render(
  
  <Router>
    <Switch>
      <Route path="/admin" component={App}></Route>
      {
        mainRoute.map(route=>{
          return <Route key={route.pathname} path={route.pathname}
          component={route.component}></Route>
        })
      }
      <Redirect to="/admin" from="/" exact></Redirect>
      <Redirect to="/404"></Redirect>
    </Switch>
  </Router>
    ,
  document.getElementById('root')
);


