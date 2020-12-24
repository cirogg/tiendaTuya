import logo from './assets/logotest.png'
import cartIcon from './assets/cart-icon.png'
import CartWidget from './CartWidget'
function Navbar(){
    

//Provisorio
    const alertHome = () =>{
        alert('Va a ir a Home')
    }
    const alertProduts = () =>{
        alert('Va a ir a Products')
    }
    const alertHotsale = () =>{
        alert('Va a ir a HotSale')
    }
    const alertAboutUs = () =>{
        alert('Va a ir a About Us')
    }
    
    return(
        <>  
            <nav>          
                <div className="divLogo">
                    <li><img src={logo} alt="Logo"/></li>
                </div>                
                <div className="divUlNavbar">
                    <ul>                     
                    <li><a href="" onClick={alertHome}>Home</a></li>
                    <li><a href="" >SWAPI TEST</a></li>
                    <li><a href="" onClick={alertHotsale}>Hotsale</a></li>
                    <li><a href="" onClick={alertAboutUs}>About us</a></li>  
                    </ul>
                </div>
                <div className="divCartWidget">
                    <li><a href="" ><CartWidget /></a></li> 
                </div>
                
            </nav>
        </>
    )
}

export default Navbar;