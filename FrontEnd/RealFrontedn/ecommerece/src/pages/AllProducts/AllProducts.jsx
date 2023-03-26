import { useEffect, useState } from 'react'
import CardComponent from '../../components/card/CardComponent'


function AllProducts(){

    const [products,setProducts]=useState([])

    useEffect(()=>{
        
    })

    return(
       <div className="allProducts-container">
        <CardComponent productName={"ToothPaste"} productPrice={"$300"} Company={"Colgate"}/>
       </div>
    )
}

export default AllProducts