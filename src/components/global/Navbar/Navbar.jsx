import logo from '../assets/logotest.png'
import CartWidget from './CartWidget'
import NavItem from './NavItem';
import {Store} from '../../../store';
import {useContext,useEffect} from "react";

function Navbar(){
    const [data, setData] = useContext(Store);

    const menuItems = [
        {
            texto: 'Home',
            ruta: '/',
        },
        {
            texto: 'Hot Sale',
            ruta: '/hot-sale',
        },
        {
            texto: 'Discontinuados',
            ruta: '/outlet',
        },
        {
            texto: 'FAQ',
            ruta: '/faq',
        },
        {
            texto: 'About Us',
            ruta: '/about-us',
        },        
    ]    
   
    
    return(
        <>  
            <nav>          
                <div className="divLogo">
                    <li><img src={logo} alt="Logo"/></li>
                </div>                
                <div className="divUlNavbar">
                    <ul>
                        {
                            menuItems.map((seccion, index) => <NavItem key={index} text={seccion.texto} url={seccion.ruta} />) 
                        }  
                    </ul>
                </div>
                <div className="divCartWidget">
                    <ul>
                        <li>
                            <a href=""><CartWidget /></a>
                        </li> 
                    </ul>
                </div>
                
            </nav>
        </>
    )
}

export default Navbar;