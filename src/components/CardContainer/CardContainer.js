
//import imgUsuario from '../../img/user.png'

import { useEffect, useState } from "react"
import { Card } from "../Card/Card"
import { products } from "../Products/Products"
const CardContainer =()=>{
    console.log(products)
    const [productList,setProductList]=useState([])

    useEffect(()=>{
        setProductList(products)
    },[])

    return(
        
        <div className="cardContainer">
             {products.map(product => <Card key={product.id} product={product} />)}
        </div>
                
        
    )
}

export {CardContainer}