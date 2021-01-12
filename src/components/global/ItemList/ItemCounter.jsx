import { useEffect, useState, useContext} from "react";
import { Redirect } from "react-router-dom";
import{BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import { Store } from '../../../store';
import React from 'react'

function ItemCounter(prop){

    const [data, setData] = useContext(Store);    

    const [count, setCount] = useState(0);
    const [goToCart, setGoToCart] = useState(false);
    const [redirect, setRedirect] = useState('/cart');   

    //Provisorio

    const item = {
        id : prop.id,
        titulo : prop.titulo,
        descripcion : prop.descripcion,
        precio : prop.precio,
        cantidadDelItem: 0
    }

    const suma = () => {        
        setCount(count + 1);  
    }
    const resta = () => {        
        setCount(count - 1);        
    }

    useEffect(()=>{
        //console.log("Cambió count")
        //setData({...data, cantidad: count});
    }, [count]) 

    const countActive = () => {
        if(goToCart){
            console.log('COUNT ACTIVE')
        return (<Redirect to={redirect}/>)

        }
    }

    const handleBuyButton = () => {      

        console.log('El id de este item es ' + item.id)

        if(count < 1) {
            alert("Elija al menos una unidad")
        } else {     

            let isInCart = false;

            data.items.forEach(element => {
                if(element.id === item.id){
                    isInCart = true;
                }
            });

            if(isInCart){
                alert('Ya agregó este producto a su carrito previamente')
            }else{
                item.cantidadDelItem = count;
                setData({...data, 
                    cantidad: data.cantidad + count,
                    items: [...data.items, item] });                     
            }

                      

            //FUNCIONA
            // setGoToCart(true);
            // countActive();
            // console.log('ELSE')







            //setRedirect('/cart'); //Test para el useEffect de abajo comentado que tampoco funciona.
            /* console.log(redirect);    
            return countActive(); */
            
         /*    (
            <div>
                <button onClick={() => countActive}>Comprar</button>
                
            </div>
            )  */// POR QUE NO FUNCIONA
        }
    }

 /*    const redirectHandler = () => {       
        renderRedirect();
    }
    const renderRedirect = () => {
        if (count > 1) {
            return <Redirect to='/' />
        }
    } */

    return(
        
        <div className="divItemCounterContainer">            
            <div className="divItemCounterContainerInside">        
                <button onClick={resta}>-</button>
                <span>{count}</span>
                <button onClick={suma}>+</button>
            </div>
            <div className="divButtonCounter">
                
                <button onClick={() => handleBuyButton()}>Comprar</button>
                    {/* // handleBuyButton() */}                   
                
            </div>
        </div>
    )

}

export default ItemCounter