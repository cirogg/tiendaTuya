import './styles/App.css'
import Hero from './components/Home/Hero'
import Footer from './components/global/Footer'
import Navbar from './components/global/Navbar';
import ItemListContainer from './components/global/ItemListContainer';

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting='Este mensajito viene desde App.jsx :)' />      
      <Footer /> 
    </>
  );
}

export default App;
