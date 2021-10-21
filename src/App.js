import React from 'react'
import Home from './component/Home';
import Login from './component/Login';
import Register from './component/Register';
import Setting from './component/Setting';
import TopBar from './component/TopBar';
import Write from './component/Write';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function App() {
  const user = false;
  return (
    <div>
      <Router>
      <TopBar/>
      <Switch>
      <Route exact path="/"><Home/></Route>
      <Route path="/register">{user ? <Home/> : <Register/>}</Route>
        
      <Route path="/login">{user ? <Home/> : <Login/>}</Route>

      <Route path="/write">{user ? <Home/> : <Write/>}<Write/></Route>
      
      <Route path="/setting">{user ? <Home/> : <Setting/>}</Route>
      
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;
