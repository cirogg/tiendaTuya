import { useEffect, useState } from "react";
import ItemDetail from './ItemDetail';

function ItemDetailContainer(){

    //MOCK DE API

    const products = [
        {
          id: 1,
          titulo: 'Producto 1',
          descripcion: "Descripcion del producto 1. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
          precio:'$1000'
        }
        // {
        //   id: 2,
        //   titulo: 'Producto 2',
        //   descripcion: 'Descripcion del producto 2',
        //   precio:'$2000'
        // },
        // {
        //   id: 3,
        //   titulo: 'Producto 3',
        //   descripcion: 'Descripcion del producto 3',
        //   precio:'$3000'
        // },
        // {
        //   id: 4,
        //   titulo: 'Producto 4',
        //   descripcion: 'Descripcion del producto 4',
        //   precio:'$4000'
        // }
      ];

      //FIN MOCK DE API

    const [items,setItems] = useState([]);

    const getItems = new Promise((resolve,reject) => {    
        setTimeout(() => {
          resolve(products)
        },1000)
      })

    const getItemsFromPromise = async () => {
        try{
            const result = await getItems;
            setItems(result);            
        }catch{
            alert('No se pudo obtener los items');
        }
    }

    useEffect(() =>{
        getItemsFromPromise();
    },[items]);

    return (
        <div className='ItemDetailContainer'>
            <h1>ItemDetailContainer</h1> 
            <div className='ItemDetailContainerProducts'>
                {
                    items.length ?
                    items.map(item =><ItemDetail key={item.key} 
                    titulo={item.titulo} 
                    descripcion={item.descripcion} 
                    precio={item.precio}/>) :
                    <p>CARGANDO</p>
                }                       
            </div>
        </div>
    )

    

}

export default ItemDetailContainer