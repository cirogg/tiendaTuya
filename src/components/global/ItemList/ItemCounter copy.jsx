import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import{BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import React from 'react'

function ItemCounter(){

    const [count, setCount] = useState(0);
    const [redirect, setRedirect] = useState('/cart');   

    const suma = () => {setCount(count + 1)}
    const resta = () => {setCount(count - 1)}

    useEffect(()=>{
        //console.log("Cambió count")
    }, [count]) 

    const handleBuyButton = () => {      
        if(count < 1) {
            //alert("Elija al menos una unidad")
            return (<div></div>)
        } else {            
            //setRedirect('/cart'); //Test para el useEffect de abajo comentado que tampoco funciona.
            console.log(redirect);    
            return (
            <div>
                <Redirect to={redirect}/>
            </div>
            ) // POR QUE NO FUNCIONA
        }
    }

    const redirectHandler = () => {       
        renderRedirect();
    }
    const renderRedirect = () => {
        if (count > 1) {
            return <Redirect to='/' />
        }
    }


    // useEffect( () =>{
    //     return(        
    //         <div >                        
    //            <Redirect to={redirect}/> 
    //         </div>
    //     )
    // }, [redirect])  //TAMPOCO FUNCIONA


    
    

    return(
        
        <div className="divItemCounterContainer">            
            <div className="divItemCounterContainerInside">        
                <button onClick={resta}>-</button>
                <span>{count}</span>
                <button onClick={suma}>+</button>
            </div>
            <div className="divButtonCounter">
                {
                <button onClick={redirectHandler}>Comprar</button>
                    // handleBuyButton()
                }
            </div>
        </div>
    )

}

export default ItemCounter