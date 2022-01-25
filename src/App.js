import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";





function App() {
  const [mode , setMode] = useState('light');
  const [alert, setAlert] = useState(null);



  const showAlert = (message, type)=>{
    setAlert({
      Message: message,
      Type: type

    })

  }


   const toggleMode =()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode Has Been Enabled ","Sucess")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Has Been Enabled ","Sucess")
    }
  }

  
  
  return (
    <>
   

   <Router>
    <Navbar title="AmanFirstApp"  mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container"> 
    <Switch>
          <Route exact path="/about">
            <About />
          </Route>
         
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="TextArea To Analyze" mode={mode}/>
          </Route>
        </Switch>
              
  
    </div>
    </Router>
   
    </>
  );
}

export default App;
