
//import imgUsuario from '../../img/user.png'

const Card =({product})=>{

    return(
        
        <div className="cardProd">
            <img className = "imagenesCard" src={product} alt="img" />
            <h1 id ="tituloGrande">DNI: {product.dni}</h1>
            <h2>Username: {product.username}</h2>
            <h2>Nombre: {product.nombre}</h2>
            <h2>Apellido: {product.apellido}</h2>
        </div>
                
        
    )
}

export {Usuario}