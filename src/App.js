import Shop from './pages/Shop/Shop';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import './App.css';
import Footer from './containers/Footer';
import Header from './containers/Header';
function App() {
  return (
    <div className='app-des'>
     <Header/>
    <Shop/>
      <Footer/>
    
    </div>     
  );
}

export default App;
