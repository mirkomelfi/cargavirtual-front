import React, { useRef } from "react";
import {Link} from "react-router-dom";


const Navbar = ({opt,cont}) =>{

    const scrollTo=(elementRef)=>{
        window.scrollTo({
            top:elementRef.current.offsetTop,
            behavior:"smooth"
        })
    }
    console.log(window)
    return (
        <header>
            <div>
            <h1>Melger - Carga virtual</h1>
            {/*<ul>
            <li className="link" >Servicios</li>
            <li className="link"  onClick={()=>opt.current?.scrollIntoView({behavior:"smooth"})}>Modalidades</li>
            <li className="link" onClick={()=>cont.current?.scrollIntoView({behavior:"smooth"})}>Contacto</li>
    </ul>*/}
            </div>
            {/*<nav id="navigation">
		<ul id="menu-main" class="menu"><li id="menu-item-1687" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-1614 current_page_item menu-item-1687"><a href="https://johnsardine.com/">Home</a></li>
            <li id="menu-item-1741" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-1741"><a href="https://johnsardine.com/category/blog/">Blog</a>
            </li>
            <li id="menu-item-1691" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-1691"><a href="https://johnsardine.com/category/freebies/">Freebies</a>
            </li>
            <li id="menu-item-1689" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1689"><a href="https://johnsardine.com/contact/">Contact</a></li>
            </ul>		
            </nav>*/
            }
        </header>
    );
  }
  
  export default Navbar;
  