import ItemCounter from './ItemCounter';

function ItemDetail(prop){


    return(

        <div className="divItemDetail">
            <div className="divItemDetailLeft">
                <img src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple_new-iphone-se-black-camera-and-touch-id_04152020_big.jpg.large.jpg" />
            </div>
        
            <div className="divItemDetailRight">                
                <div className="titulo"><span >{prop.titulo}</span></div>
                <div className="descripcion"><span >{prop.descripcion}</span></div>
                <div className="precio"><span >{prop.precio}</span></div>    
            </div>               
        </div>
    )
}

export default ItemDetail