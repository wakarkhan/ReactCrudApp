import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './components/pages/Home';
import SharedLayout from './components/layout/SharedLayout';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import AddUser from './components/pages/users/AddUser';
import UserDetail from './components/pages/users/UserDetail';
import EditUser from './components/pages/users/EditUser';

function App() {
  return (
    <Router>
      <div className="App">
      <SharedLayout />

      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/users/adduser" component={AddUser}></Route>
        <Route exact path="/users/edituser/:id" component={EditUser}></Route>
        <Route exact path="/users/userdetail/:id" component={UserDetail}></Route>
        <Route component={NotFound}></Route>
        
      </Switch>
      </div>
    </Router>
  );
}

export default App;
