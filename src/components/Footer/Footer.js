import React from "react";
import { AiOutlineMessage,AiOutlineMail  } from "react-icons/ai";
import {Link} from "react-router-dom";

const Footer = () =>{
    return (
        <footer>
            <h6>Melger - Carga virtual</h6>
            <div className="footerInfo">

            
        <i class="fa-regular fa-envelope"></i><p>melger@gmail.com</p>
   

            </div>
            <div className="footerInfo">
            <i class="fa-brands fa-whatsapp"></i><a href="https://wa.me/+5491133169586"> +54 9 1133169586</a>
                
                
            </div>
            <p>Cualquier consulta, no dude en contactarse</p>
        </footer>
    );
  }
  
  export default Footer;
  