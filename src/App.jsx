
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Doctormain from './Components/Doctormain/Doctormain';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Viewdoc from './Components/Viewdoc/Viewdoc';

function App() {
  return (
    <div>
      <Header/>
      
      <Routes>
        <Route path='/' element={<Doctormain/>}/>
        <Route path='/view/:id' element={<Viewdoc/>}/>
      </Routes>
    
      <Footer/>
    </div>
  );
}

export default App;
