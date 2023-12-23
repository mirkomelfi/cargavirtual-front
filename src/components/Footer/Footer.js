import React from "react";
import { AiOutlineMessage,AiOutlineMail  } from "react-icons/ai";
import {Link} from "react-router-dom";

const Footer = () =>{
    return (
        <footer id="contact">
            <h6>Melger - Carga virtual</h6>
            
            <p>Cualquier consulta, no dude en contactarse</p>
            <div className="footerInfo">

            
        <i class="fa-regular fa-envelope"></i><p>soporte.melger@gmail.com</p>
   

            </div>
            <div className="footerInfo">
            <i class="fa-brands fa-whatsapp"></i><a href="https://wa.me/+5491170180090"> +54  9  11 - 7018 - 0090</a>
                
                
            </div>
            <p>Contacto únicamente por Whatsapp</p>
        </footer>
    );
  }
  
  export default Footer;
  