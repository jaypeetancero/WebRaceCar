import React from 'react';
import './App.css';
import RaceCars from './components/raceCar/RaceCars';
import RaceCarContainer from './components/raceCar/RaceCarContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/navigations/Header';
import SideBar from './components/navigations/SideBar';

function App() {

  const routes = [
    {
      path : '/',
      component : RaceCars
    },{
      path : '/raceCars',
      component : RaceCars
    }
  ]

  const routeComponents = routes.map((route, key) => <Route exact path={route.path} component={route.component} key={key}/>)

  return (
    <div>
      <Router>
        <Header />
        <div className="row p-0 m-0">
          <div className="col-2 p-0 m-0">
            <SideBar />
          </div>
          <div className="col-9">
            <Switch>
              {routeComponents}
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
