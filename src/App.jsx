import './styles/App.css'
import { useEffect, useState } from "react";
import Footer from './components/global/Footer'
import Navbar from './components/global/Navbar/Navbar';
import ItemListContainer from './components/global/ItemList/ItemListContainer';
import ItemDetailContainer from './components/global/Detail/ItemDetailContainer';
import Cart from './components/global/Cart/CartContainer';
import{BrowserRouter, Switch, Route} from 'react-router-dom'
import {Store} from './store';

function App() {

const windowResize = (e) =>{
  console.log(e);
}

  useEffect(() => {
    window.addEventListener('resize', windowResize);

    return () => {
      window.removeEventListener('resize', windowResize);
    }
  },[]);

  const [data, setData] = useState({
    items: [],
    cantidad: 0,
    precioTotal: 0,
    isCartEmpty: true,
  })


  return (
    <Store.Provider value={[data, setData]}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer descripcion={"Productos destacados"} />
          </Route>
          <Route path="/detail/:title/:price/:id">
            <ItemDetailContainer />
          </Route>     
          <Route path="/hot-sale">
            <ItemListContainer descripcion={"Hot Sale!"} campaña={"hotsale"} />
          </Route>  
          <Route path="/outlet">
            <ItemListContainer descripcion={"Outlet!"} campaña={"outlet"} />
          </Route>                     
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="*">
            <p>404</p>
          </Route>          
        </Switch>
        <Footer />
      </BrowserRouter>
    </Store.Provider>
  );
}

export default App;
