import ItemCounter from './ItemCounter';

function ItemListContainer(prop){
    

    return(
        <div className="divItemListContainer shadow">
            <div className="divSuperiorItemListContainer">
                <img src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple_new-iphone-se-black-camera-and-touch-id_04152020_big.jpg.large.jpg" />
                <h3>Producto</h3>
                <h6>Pequeña descripción del producto</h6>
                <h5>$5000</h5>
            </div>
            <div className="divInferiorItemListContainer">
                <p>{prop.greeting}</p>            
            </div>

            <div>
                <ItemCounter />
            </div>
        </div>
    )

}

export default ItemListContainer