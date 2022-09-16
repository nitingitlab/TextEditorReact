import React,{useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  let [mode,setMode]=useState('light');
  let [alert,setAlert]=useState(null);
  function showAlert(message,type){
   setAlert( {msg:message,
    type:type})
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  function toggle(){
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enabled","Success");
      
    }else{
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode is enabled","Success");
     
    }
     
    
  }
  return (
    <>
    <Navbar title="TextEditor" about="about TextEditor" mode={mode} toggle={toggle}/>
  <div className="container my-3">
    <Alert alert={alert}/>
  <TextForm heading="Enter your text below" mode={mode} showAlert={showAlert}/>
  </div>
    
    </>
  );
}

export default App;
