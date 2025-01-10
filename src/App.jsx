import Header from './component/Header.jsx'
import Main from './component/Main.jsx'
import Footer from './component/Footer.jsx'

import Popup from './component/Popup.jsx'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'

function App() {
 

  return (
    <>
    {/* Routes */}
    <Routes>
        <Route path="/" element={<Solar />} />
        
      </Routes>
     <Header />
     {/* <Popup /> */}
     {/* <Solar></Solar> */}

     
     
    </>
  )
}

export default App
