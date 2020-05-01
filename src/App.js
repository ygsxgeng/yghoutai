import React from 'react';
import Frame from "./components/frame"
import { Switch, Route, Redirect } from 'react-router-dom';
import {adminRoute} from "./router"


function App() {
  return (
    <Frame>
      <Switch>
          {
            adminRoute.map(route=>{
              return <Route key={route.pathname} path={route.pathname} 
              component={route.component} exact={route.exact}></Route>
            })

          }
        <Redirect to={adminRoute[0].pathname} from="/admin"></Redirect>
        <Redirect to='/404'></Redirect>
      </Switch>
    </Frame>
  );
}

export default App;
