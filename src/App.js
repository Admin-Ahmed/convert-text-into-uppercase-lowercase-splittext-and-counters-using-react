//import logo from './logo.svg';
// import './components/css/main.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Form from './components/Form'
// import Counter from './components/Counter';
import Count from './components/Count';
//import  './main.css';
import React, { useState } from 'react';
import Alert from './components/Alert';
import NotFound from './components/NotFound';
// import NotFound from './components/NotFound';
// import Counter from './components/Counters';
// import About from './components/About';
function App() {
const [mode, setMode] = useState('light');
const [alert, setAlert] = useState(null);
// const [show, setShow] = useState();

// const buttonText = show ? "Hide Component" : "Show Component";
// function toggleShow() {
//   setShow(!show);
// }
        
const showAlert = (message, type)=>{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1500);
}
const toggleMode  = ()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#04111d';
    showAlert("Dark mode has been enabled", "success");
    document.title = "TextUtils - Dark Mode";
  }
  else {
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success");
    document.title = "TextUtils - Light Mode";
  }
}
  //const [mode,setmode] = useState('dark');
return ( 
<>
<BrowserRouter>

<Navbar title ="Navbar"  mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<Routes>
<Route path='/home' element={<Form />} />
{/* <Form className='new' showAlert={showAlert} heading="Enter the text here" mode={mode} />       */}
   
{/* <Alert alert={alert}/> */}
  <Route path='/about' element={<Count />}  />
  <Route element={<NotFound />}  />
  {/* <Counters mode={mode} /> */}
  {/* <button type="button" onClick={toggleShow} class="btn btn-primary mx-4">Click to Hide/Show</button> */}
  {/* <About/> */}
  {/* <Count mode={mode} /> */}

</Routes>
</BrowserRouter>
</>  
);
}
export default App;