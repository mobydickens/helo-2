import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Auth from './components/Auth.jsx';
import Home from './components/Home.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route exact path='/' component={ Auth } />
            <Route exact path='/home' component={ Home } />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
