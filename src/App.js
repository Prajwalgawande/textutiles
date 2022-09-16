import React, { useState } from 'react';

import './App.css';

import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';





function App() {
//   const [alert, setalert] = useState(null);
//   const showAlert =(massage,type)=>{
//     setalert({
//       msg:massage,
//       type:type
//     })
//   }

  const [mode, setmode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {

      setmode('dark');
      document.body.style.backgroundColor = 'black';
      
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
    //  showAlert("Dark mode has been enabled","success")
     // {showAlert.style.backgroundColor='green'}
    }
  }
  return (
    <>
   
        <Navbar abouttext="TextUtils" mode={mode} toggleMode={toggleMode} />
          <TextForm heading="Enter the text to analyze" mode={mode}  />
      {/* <Router>
    <Alert alert={alert}/>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      </Router> */}

    </>
  );
  }

export default App;
