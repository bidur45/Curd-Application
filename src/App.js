import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from './components/Home'
import Edituser from './components/Edituser'
import Adduser from "./components/Adduser";
import User from './components/User'

function App() {
  return (
     <Router>
       <Navbar/>
       <Switch>
         <Route exact path='/'><Home/></Route>
         <Route exact path='/users/edit/:id'><Edituser/></Route>
         <Route exact path='/users/adduser'><Adduser/></Route>
         <Route exact path='/user/:id'><User/></Route>

       </Switch>
     </Router>
  );
}

export default App;
