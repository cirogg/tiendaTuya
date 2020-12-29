import './styles/App.css'
import Footer from './components/global/Footer'
import Navbar from './components/global/Navbar/Navbar';
import ItemListContainer from './components/global/ItemList/ItemListContainer';
import ItemDetailContainer from './components/global/Detail/ItemDetailContainer';
import{BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {


  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route exact path="/">
          <ItemListContainer descripcion={"Productos destacados"} />
        </Route>
        <Route path="/detail/:title/:price">
          <ItemDetailContainer />
        </Route>     
        <Route path="/hot-sale">
          <ItemListContainer descripcion={"Hot Sale!"} campaña={"hotsale"} />
        </Route>  
        <Route path="/outlet">
          <ItemListContainer descripcion={"Outlet!"} campaña={"outlet"} />
        </Route> 
        <Route path="*">
          <p>404</p>
        </Route>          
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
