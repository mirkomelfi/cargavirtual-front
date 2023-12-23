
//import imgUsuario from '../../img/user.png'

const Card =({item})=>{

    return(
        
        <div className="card">
            
            <h1 className="card-title">{item.name}</h1>
            <img className = "card-image" src={item.img} alt="img" />
            <p className="card-text">{item.description}</p>
        </div>
                
        
    )
}

export {Card}