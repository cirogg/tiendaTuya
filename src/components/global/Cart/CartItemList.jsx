import {Store} from '../../../store';
import { useEffect, useState, useContext} from "react";

function CartItemList(prop){

    const [data, setData] = useContext(Store);

    const deleteItemFromCart = (id) => {

        let cantToDelete = 0

        data.items.forEach(element => {
            if(element.id === id){
                const id = data.items.indexOf(element); //
                data.items.splice(id,  1);      
                cantToDelete = element.cantidadDelItem;          
            }
        });

        setData({...data, 
            cantidad: data.cantidad - cantToDelete,
            items: data.items });   
    }

    return(

        <div className= "divCartContainer">
            {                
                data.items.map(item =>(
                    <div className="divCartItemListContainer shadow">
                            <div className="divLeftCartItemListContainer">
                                <img src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple_new-iphone-se-black-camera-and-touch-id_04152020_big.jpg.large.jpg" />                         
                            </div>                           
                            <div className="divRightCartItemListContainer">
                                <h3>{item.titulo}</h3>                
                                <h5>{item.precio}</h5>       
                                <span>Cantidad: {item.cantidadDelItem}</span>
                                <button onClick={() => deleteItemFromCart(item.id)}>Borrar del carrito</button>
                            </div>        
                        </div> 
                ))
            }            
        </div>
    );
}

export default CartItemList;