import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/login'
import Register from './components/register'
import Profile from './components/profile'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Route exact path="/" component={Landing}/>
        <div className="container">
          <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/profile" component={Profile}/>
        </div>
      </div>
    </Router>
  );
}

export default App;

