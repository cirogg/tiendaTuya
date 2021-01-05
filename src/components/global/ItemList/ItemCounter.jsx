import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import{BrowserRouter, Switch, Route, Link} from 'react-router-dom'

function ItemCounter(){

    const [redirect, setRedirect] = useState('');    


    const habdleBuyButton = e => {
        e.preventDefault();
       

        if(count < 1) {
            alert("Elija al menos una unidad")
        } else {            
            setRedirect('/cart'); //Test para el useEffect de abajo comentado que tampoco funciona.
            // console.log(redirect);    
            return <Redirect to={redirect}/> // POR QUE NO FUNCIONA
        }
    }

    // useEffect( () =>{
    //     return(        
    //         <div >                        
    //            <Redirect to={redirect}/> 
    //         </div>
    //     )
    // }, [redirect])  //TAMPOCO FUNCIONA


    
    const [count, setCount] = useState(0);

    useEffect(()=>{
        //console.log("Cambió count")
    }, [count])

    const suma = () => {setCount(count + 1)}
    const resta = () => {setCount(count - 1)}

    return(
        
        <div className="divItemCounterContainer">            
            <div className="divItemCounterContainerInside">        
                <button onClick={resta}>-</button>
                <span>{count}</span>
                <button onClick={suma}>+</button>
            </div>
            <div className="divButtonCounter">
                <button onClick={habdleBuyButton}>Comprar</button>                  
            </div>
        </div>
    )

}

export default ItemCounter