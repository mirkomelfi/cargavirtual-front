
//import imgUsuario from '../../img/user.png'

import { CardContainer } from "../CardContainer/CardContainer"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"

const Home =()=>{

    return(
        
        <div className="homeContainer">
            <Navbar/>
            <CardContainer/>
            <Footer/>
        </div>
                
        
    )
}

export {Home}