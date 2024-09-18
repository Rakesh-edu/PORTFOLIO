import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Project from './Components/Project/Project';


function App() {
  return (
   <div >
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/project' element={<Project/>}/>
      </Routes>
      <Footer/>
      </Router>
   </div>
  );
}

export default App;
