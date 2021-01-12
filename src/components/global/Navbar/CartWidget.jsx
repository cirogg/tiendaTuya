import cartIcon from '../assets/cart-icon.png';
import {useContext} from 'react';
import {Store} from '../../../store';
import {Link} from 'react-router-dom'
function CartWidget(){

    const [data, setData] = useContext(Store)

    //Provisorio
    const cartClick = () =>{
        
    }

    return(
        <div className="divCartWidget">
            <Link to={'/cart'}>
                <img src={cartIcon} onClick={cartClick} alt="Cart icon"/>
            </Link>
            <span>{data.cantidad}</span>
        </div>
    )

}

export default CartWidget