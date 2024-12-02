import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import'../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';
import Header from './header/Header';
import Home from './home/Home';
import About from './about/About';

import Enquiry from './enquiry/ViewEnquiry';
import SignIn from './sign-in/SignIn';
import AddEnquiry from './enquiry/AddEnquiry';
import { keyboardImplementationWrapper } from '@testing-library/user-event/dist/keyboard';
import'../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import Slider from './Slider';

function App() {
  return (<div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
    
    <Route path="/"element={<Home/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    
     <Route path='/add' element={<AddEnquiry/>}/>
    <Route path="/viewenquiry" element={<Enquiry/>}/>
    <Route path="login" element={<SignIn/>}/>
    <Route path="edit/:applicant_Id" element={<AddEnquiry/>}/>

 </Routes>

      
      </BrowserRouter>
     <Slider></Slider>
      
    </div>
  );
  
}

export default App;
