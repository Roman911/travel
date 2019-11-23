import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { NavBar, Home, Article, About, Map, Login, Register } from './Components';

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <Switch>
          <Route path="/map" render={ ()=> <Map /> } />
          <Router path = '/article/:01' render = {() => <Article/> } />
          <Route path="/about" render={ ()=> <About /> } />
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/login" render={ ()=> <Login /> }/>
          <Route path="/register" render={ ()=> <Register /> }/>
          <Route path="/" render={ ()=> <Home /> } />
        </Switch>
      </div>
    </Router>
  );
}

function Users() {
  return <h2>Users</h2>;
}

export default App;