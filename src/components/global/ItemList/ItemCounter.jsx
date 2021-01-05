import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import{BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import React from 'react'

function ItemCounter(){

    const [count, setCount] = useState(0);
    const [goToCart, setGoToCart] = useState(false);
    const [redirect, setRedirect] = useState('/cart');   

    const suma = () => {setCount(count + 1)}
    const resta = () => {setCount(count - 1)}

    useEffect(()=>{
        //console.log("Cambió count")
    }, [count]) 

    const countActive = () => {
        if(goToCart){
            console.log('COUNT ACTIVE')
        return (<Redirect to={redirect}/>)

        }
    }

    const handleBuyButton = () => {      
        if(count < 1) {
            alert("Elija al menos una unidad")
        } else {     
            setGoToCart(true);
            countActive();
            console.log('ELSE')

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
                    {countActive()}
                
            </div>
        </div>
    )

}

export default ItemCounter