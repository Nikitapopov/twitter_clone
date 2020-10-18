import React from 'react';
import {SignIn} from './pages/SignIn';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
        <Switch>
            <Route path='/signIn' component={SignIn}/>
            <Route path='/' component={Home}/>
        </Switch>
    </div>
  );
}

export default App;
