import './styles/App.css'
import Hero from './components/Home/Hero'
import Footer from './components/global/Footer'
import Navbar from './components/global/Navbar';
import ItemListContainer from './components/global/ItemListContainer';

function App() {
  return (
    <>
      <Navbar />
      <div className="mainContainer">
        <ItemListContainer greeting='Este mensajito viene desde App.jsx :)' />      
        <ItemListContainer greeting='Este mensajito viene desde App.jsx :)' />      
        <ItemListContainer greeting='Este mensajito viene desde App.jsx :)' />      
        <ItemListContainer greeting='Este mensajito viene desde App.jsx :)' />    
      </div>      
      <Footer /> 
    </>
  );
}

export default App;
