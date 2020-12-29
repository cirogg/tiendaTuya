import { useEffect, useState } from "react";

function ItemCounter(){
    
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
        </div>
    )

}

export default ItemCounter