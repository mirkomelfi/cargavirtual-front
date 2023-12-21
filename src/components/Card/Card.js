
//import imgUsuario from '../../img/user.png'

const Card =({product})=>{
    console.log("card",product)
    return(
        
        <div className="card">
            
            <h1 className="card-title">{product.name}</h1>
            <img className = "card-image" src={product} alt="img" />
            <p className="card-text">{product.description}</p>
        </div>
                
        
    )
}

export {Card}