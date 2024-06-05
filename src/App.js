import Shop from './pages/Shop/Shop';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import './App.css';
import Footer from './containers/Footer';
import Header from './containers/Header';
import BikeDetail from './pages/BikeDetail/BIkeDetail';
import { products } from './pages/data';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing/Landing';
function App() {
  return (
    <div className='app-des'>
      
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/'  element={<Landing/>}/>
        <Route path='/blogs' element={<Blog/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path="/bike/:id" element={<BikeDetail data={products[0]}/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
     
    
    </div>     
  );
}

export default App;
