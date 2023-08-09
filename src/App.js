 
import React,{ useState } from 'react';
import './App.css';

// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";


 

function App() {
  const[Mode,setMode]=useState('light');
  const[alert,setAlert]=useState('null');
  const handleToggelMode=()=>{
    if(Mode==='dark'){
    setMode('light');
     handleShowAlert("Light Mode Enabled", "success"); 
      document.body.style.backgroundColor='white';
    }
    else{
    setMode('dark');
      document.body.style.backgroundColor ='rgb(46 54 55)';
      handleShowAlert("Dark Mode Enabled","success");
    }

  }
  const handleShowAlert=(message,type)=>{
    setAlert({
      type: type,
    msg: message
   
    })
    setTimeout(() => {
      setAlert('null');
      
    },1000);
  } 
  const handleRedMode=()=>{
    setMode('danger');
    handleShowAlert("Red theme enabled", "success")
    document.body.style.backgroundColor ="#ee6565"

  }
  const handleYellowTheme=()=>{
    setMode("warning");
    handleShowAlert("Yellow theme enabled", "success")
    document.body.style.backgroundColor = "#e9e92a"
  }
  const handlegreenTheme=()=>{
    setMode("success");
    handleShowAlert("Green theme enabled","success")
    document.body.style.backgroundColor = "green"
  }


  return (
     <>
<Navbar title="TextUtils3" aboutText="About TextUtils"  mode={Mode} redMode={handleRedMode} yellowTheme={handleYellowTheme} greenTheme={handlegreenTheme} toggleMode={handleToggelMode} btnToggleTheme={Mode==='light'?'dark':'light'} btnToggleText={Mode==='light'?'Enable Dark Mode':'Enable light Mode'} />  
    {/* { <Navbar/> */}
    <Alert alert={alert}/>
    <div className="container my-3">
      <TextForm heading="Enter Your Text Below " mode={Mode} handleshowAlert={handleShowAlert} />
      </div>
    </>

  );
}

export default App;
