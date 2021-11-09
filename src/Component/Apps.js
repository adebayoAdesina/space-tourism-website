import React from 'react';
import { Route, Switch } from 'react-router-dom';



import Home from './Home';
import Destination from './Destination';
import Crew from './Crew';
import Technology from './Technology';


function Apps() {
  return (
    <div className="App mr-0">
      <body className="App-header">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Destination" exact component={Destination}/>
          <Route path="/Crew" exact component={Crew}/>
          <Route path="/Technology" exact component={Technology}/>
        </Switch>
      </body> 
    </div>
  );
}

export default Apps;