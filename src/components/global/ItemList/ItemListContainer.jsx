import {useState, useEffect} from 'react';
import ItemList from './ItemList';

function ItemListContainer(prop){

    const [items, setItems] = useState([]);

    const products = [
      {
        id: 1,
        titulo: 'Producto 1',
        descripcion: 'Descripcion del producto 1 - ¡Esta en HotSale!',
        precio:1000,
        campaña: 'hotsale'
      },
      {
        id: 2,
        titulo: 'Producto 2',
        descripcion: 'Descripcion del producto 2 - ¡Aprovecha en Outlet!',
        precio:2000,
        campaña: 'outlet'
      },
      {
        id: 3,
        titulo: 'Producto 3',
        descripcion: 'Descripcion del producto 3 - ¡Esta en HotSale!',
        precio:3000,
        campaña: 'hotsale'
      },
      {
        id: 4,
        titulo: 'Producto 4',
        descripcion: 'Descripcion del producto 4 - ¡Aprovecha en Outlet!',
        precio:4000,
        campaña: 'outlet'
      }
    ];
  
    const getProducts = new Promise((resolve,reject) => {    
      setTimeout(() => {
        resolve(products)
      },100)
    })
  
    const getProductsFromDB = async () =>{
      try {
        const result = await getProducts;
        setItems(result)
      }catch(error){
        alert('No podemos mostrar los productos en este momento')
      }
    }

    const filterListDependingOnPage = (arrayDeProducts) =>{
      var arrayNuevoDeProducts = [];
      switch (prop.campaña) {
        case 'hotsale':
          arrayDeProducts.forEach(element => {
            if(element.campaña =="hotsale"){
              arrayNuevoDeProducts.push(element);
            }
          });
          break;
        case 'outlet':
          arrayDeProducts.forEach(element => {
            if(element.campaña =="outlet"){
              arrayNuevoDeProducts.push(element);
            }
          });
          break;        
        default:
         arrayNuevoDeProducts = arrayDeProducts;
      }

      //console.log(arrayNuevoDeProducts);
      return arrayNuevoDeProducts;
    }

   
  
    useEffect(()=>{
      getProducts
      .then(rta => {setItems(filterListDependingOnPage(rta))})
      .catch(error => console.log(error))
    }, [items])  
    

    return(
        <div>
        <span className="titleProductsPage">{prop.descripcion}</span>
        {
            items.length ?
            <div className="mainContainer">
              {                
                items.map(item =>(
                  <ItemList 
                    id={item.id}
                    titulo={item.titulo} 
                    descripcion={item.descripcion} 
                    precio={item.precio}/>))
              } 
            </div> :  
            <p className='cargando'>Cargando items</p>
          }
        </div>
    )
}

export default ItemListContainer