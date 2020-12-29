import cartIcon from '../assets/cart-icon.png'
function CartWidget(){

    //Provisorio
    const cartClick = () =>{
        alert('Click en cart')
    }

    return(
        <>
            <img src={cartIcon} onClick={cartClick} alt="Cart icon"/> 
        </>
    )

}

export default CartWidget