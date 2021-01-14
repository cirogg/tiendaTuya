import CartItemList from '../Cart/CartItemList';
import {Store} from '../../../store';
import {useContext} from "react";


function CartContainer(){    

    const [data, setData] = useContext(Store);

    return(
        <div className="divCartContainerParent">
            <div className="divCartContainerLeft">            
                <CartItemList />
            </div>
            <div className="divCartContainerRight">            
                <span>Precio total</span>
                <span>$ {data.precioTotal}</span>
            </div>
        </div>

    )
}

export default CartContainer