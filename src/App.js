import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import'../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';
import Header from './header/Header';
import Home from './home/Home';
import About from './about/About';
import Courses from './courses/Courses';
import Enquiry from './enquiry/Enquiry';
import SignIn from './sign-in/SignIn';

function App() {
  return (<div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
    
    <Route path="/"element={<Home/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/courses" element={<Courses/>}/>
    <Route path="/contact-us" element={<Enquiry/>}/>
    <Route path="login" element={<SignIn/>}/>

 </Routes>

      
      </BrowserRouter>
      
    </div>
  );
  
}

export default App;
