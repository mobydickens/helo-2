import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Auth from './components/Auth.jsx';
import Home from './components/Home.jsx';
import SinglePost from './components/SinglePost.jsx';
import NewPost from './components/NewPost.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route exact path='/' component={ Auth } />
            <Route path='/home' component={ Home } />
            <Route path='/post' component={ SinglePost } />
            <Route path='/newpost' component={ NewPost } />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
