import logo from './assets/logotest.png'
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
                <ul>
                    <li><img src={logo} alt="Logo"/></li> 
                    <li><a href="" onClick={alertHome}>Home</a></li>
                    <li><a href="" onClick={alertProduts}>Productos</a></li>
                    <li><a href="" onClick={alertHotsale}>Hotsale</a></li>
                    <li><a href="" onClick={alertAboutUs}>About us</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;