import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';

import { BrowserRouter } from "react-router";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";






function App() {

  const [mode, setMode] = useState('light'); 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }



  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      showAlert("Dark mode has been enabled", "success");
      document.title='TextUtils-Dark'
    }
    else{
      setMode('light');
      showAlert("Light mode has been enabled", "success");
      document.title='TextUtils-Light'
    }
  }





  return (
    <>
    <Router>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
     <div className="container my-3">
      <Switch>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/">
          <Textform  showAlert={showAlert} mode={mode}/>
        </Route>
      </Switch>

     </div>
    </Router>
    </>
  );
}

export default App;
