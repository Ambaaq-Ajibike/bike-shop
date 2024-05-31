import Shop from './pages/Shop/Shop';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import './App.css';
import Footer from './containers/Footer';
import Header from './containers/Header';
import BikeDetail from './pages/BikeDetail/BIkeDetail';
import { products } from './pages/data';
function App() {
  return (
    <div className='app-des'>
     <Header/>
    <BikeDetail data={products[0]}/>
      <Footer/>
    
    </div>     
  );
}

export default App;
