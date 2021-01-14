import ItemCounter from './ItemCounter';
import {Link} from 'react-router-dom'

function ItemList(prop){
    
    const handleClickAddProduct = (e) =>{
        console.log(e)
    }

    return(
        <div className="divItemListContainer shadow">
            <div className="divSuperiorItemListContainer">
                <img src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple_new-iphone-se-black-camera-and-touch-id_04152020_big.jpg.large.jpg" />
                <h3>{prop.titulo}</h3>
                <h6>{prop.descripcion}</h6>
                <h5>${prop.precio}</h5>                
            </div>               
            <div>
                <Link to={`/detail/${prop.titulo}/${prop.precio}/${prop.id}`}>Ver mas</Link>                
            </div>
        </div>
    )

}

export default ItemList