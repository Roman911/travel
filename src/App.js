import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { NavBar, Home, About } from './Components';

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <Switch>
          <Route path="/about" render={ ()=> <About/> } />
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/" render={ ()=> <Home/> } />
        </Switch>
      </div>
    </Router>
  );
}

function Users() {
  return <h2>Users</h2>;
}

export default App;