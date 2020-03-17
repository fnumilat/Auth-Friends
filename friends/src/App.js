import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import AddFriend from './components/AddFriend';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="NavigationBar">
            <Link className="NavItem" to="/login">Login</Link>
            <Link className="NavItem" to="/friendsList">Friends List</Link>
        </div>
      </div>
      <Switch>
        <Route exact path="/login" component={Login}/>
        <PrivateRoute exact path="/friendsList" component={FriendsList}/>
        <Route exact path="/AddFriend" component={AddFriend} />
      </Switch>
    </Router>
  );
}

export default App;
