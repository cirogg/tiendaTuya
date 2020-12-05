function Hero(){

    const saludar = () =>{
        alert('Holaaaa')
    }

    return(
        <>
            <h1>Bienvenidos a mi tienda</h1>
            <p>Vendemos falopa rey</p>
            <button onClick={saludar}>Saludar!</button>
        </>
    )
}

export default Hero;