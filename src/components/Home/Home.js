
//import imgUsuario from '../../img/user.png'

import { CardContainer } from "../CardContainer/CardContainer"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import { products } from "../Products/Products"
import { options } from "../Products/Options"


const Home =()=>{
    return(
        
        <div className="homeContainer">
            <Navbar/>
            <CardContainer title={"Servicios"} itemList={products}/>
            <CardContainer title={"Modalidad de Carga"} itemList={options}/>
            <Footer/>
        </div>
                
        
    )
}

export {Home}