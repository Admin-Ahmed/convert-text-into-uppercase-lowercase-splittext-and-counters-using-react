import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Form from './components/Form'
import Count from './components/Count';
import React, { useState } from 'react';
import Alert from './components/Alert';
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
return ( 
<>
<BrowserRouter>

<Navbar title ="Navbar"  mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<Routes>
<Route path='/home' element={<Form />} />
  <Route path='/about' element={<Count />}  />

</Routes>
</BrowserRouter>
</>  
);
}
export default App;