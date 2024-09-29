
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextFrom from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {

  const [mode, Setmode] = useState("light")
  const  [alert, setAlert] = useState(null)

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
 }

  const toogleMood= ()=>{
    if(mode === 'light'){
      Setmode('dark')

      document.body.style.backgroundColor = '#0b043a'
      showAlert("Dark mood has been Enabled", "success")
      document.title = "TextUtils - Dark Mode"

    }
    else{
      Setmode('light')

       document.body.style.backgroundColor = 'white'
      showAlert("Light has been Enabled", "success")
      document.title = "TextUtils - Light Mode"

    }
}

  return (

    <>
    <Router>
      <Navbar title="TextUtils" TextAbout="About" mode={mode} toogleMood={toogleMood} />
      {/* <Navbar title="TextUtils" mode={mode} toogleMood={toogleMood} /> */}
      <Alert alert={alert}/>
      <div className='container my-3' >
      
        <Routes>
          <Route exact path="/about" element=
           {<About />}>
          </Route>
          <Route exact path="/" element={
            <TextFrom showAlert={showAlert} heading="Enter the Text To Analyze Below" mode={mode}  />}>
          </Route>
        </Routes>
      
        
      </div>
    </Router>
    </>

  );
}

export default App;
