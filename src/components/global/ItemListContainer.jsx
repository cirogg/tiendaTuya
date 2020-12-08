function ItemListContainer(prop){
    

    return(
        <div className="divItemListContainer">
            <div className="divSuperiorItemListContainer">
                <h3>Esto es un titulo del ItemListContainer</h3>
                <h5>Y acá abajo y en violeta va a ir la prop greeting</h5>
            </div>
            <div className="divInferiorItemListContainer">
                <p>{prop.greeting}</p>            
            </div>
        </div>
    )

}

export default ItemListContainer