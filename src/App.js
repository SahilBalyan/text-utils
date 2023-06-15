import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const removeBodyClasses = ()=>{
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-dark");
  }

  const toggleMode = (cls) => {
    removeBodyClasses();

    if(cls==="primary"){
      setMode("primary");
      document.body.style.backgroundColor = "#36454F";
      document.body.style.color = "white";
    }
    if(cls==="success"){
      setMode("success");
      document.body.style.backgroundColor = "#004225";
      document.body.style.color = "white"
    }
    if(cls==="danger"){
      setMode("danger");
      document.body.style.backgroundColor = "#7E3517";
      document.body.style.color = "white"
    }
    if(cls==="warning"){
      setMode("warning");
      document.body.style.backgroundColor = "#C58917";
      document.body.style.color = "white"
    }
    if(cls==="dark"){
      setMode("dark");
      document.body.style.backgroundColor = "#666362";
      document.body.style.color = "white"
    }
    if(cls==="light"){
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black"
    }
  }

  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
      <Textform heading="Enter your text here" mode={mode} showAlert={showAlert}/>
      {/* <About mode={mode}/> */}
    </div>
    {/* <Routes>
          <Route exact path="/about" element={<About mode={mode}/>} />
          <Route exact path="/" element={<Textform heading="Enter your text here" mode={mode} showAlert={showAlert}/>} />
      </Routes>
    </Router> */}
    </>
  );
}

export default App;
