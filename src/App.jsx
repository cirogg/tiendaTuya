import './styles/App.css'
import {useState, useEffect} from 'react';
import Hero from './components/Home/Hero'
import Footer from './components/global/Footer'
import Navbar from './components/global/Navbar';
import ItemListContainer from './components/global/ItemListContainer';

function App() {

  const [items, setItems] = useState([]);

  const products = [
    {
      id: 1,
      titulo: 'Producto 1',
      descripcion: 'Descripcion del producto 1',
      precio:'$1000'
    },
    {
      id: 2,
      titulo: 'Producto 2',
      descripcion: 'Descripcion del producto 2',
      precio:'$2000'
    },
    {
      id: 3,
      titulo: 'Producto 3',
      descripcion: 'Descripcion del producto 3',
      precio:'$3000'
    },
    {
      id: 4,
      titulo: 'Producto 4',
      descripcion: 'Descripcion del producto 4',
      precio:'$4000'
    }
  ];

  const getProducts = new Promise((resolve,reject) => {    
    setTimeout(() => {
      resolve(products)
    },2000)
  })

  useEffect(()=>{
    getProducts
    .then(rta => setItems(rta))
    .catch(error => console.log(error))
  }, [])  

  return (
    <>
      <Navbar />      
      <div className="mainContainer">
        {
          items.length ?
          <div>
            {
              items.map(item =>(
                <ItemListContainer 
                titulo={item.titulo} 
                descripcion={item.descripcion} 
                precio={item.precio}/>))
            } 
          </div> :  
          <p className='cargando'>Cargando items</p>
        }
         
      </div>      
      <Footer /> 
    </>
  );
}

export default App;
