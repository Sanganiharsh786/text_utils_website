// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';



function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type


    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(101, 100, 100)'
      showAlert("dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" about="AboutUs" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-3">
          <Routes> {/* Update the component name to Routes */}
            <Route path="/About" element={<About />} /> {/* Update the Route syntax */}
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter The text to analyze below " mode={mode} />} /> {/* Update the Route syntax */}
          </Routes>
        </div>
      </Router>
    </>
  );
}




export default App;
