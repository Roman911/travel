import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { NavBar, Home, About, Login } from './Components';

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
          <Route path="/login" render={ ()=> <Login/> }/>
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