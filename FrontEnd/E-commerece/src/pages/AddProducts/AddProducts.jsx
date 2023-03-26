
import axios from 'axios'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './AddProducts.css'
function AddProducts(){

    const navigate=useNavigate()

    const [name,setName]=useState("")
    const [price,setPrice]=useState(0)
    const [company,setCompany]=useState("")
    const [rating,setRating]=useState(0)
    const [featured,setFeatured]=useState(false)

    

return(
    <div className="centerized">
        <form onSubmit={(event)=>{
            event.preventDefault();
            axios.post('http://localhost:3000/add-product',{
                name,price,company,featured,rating
            }).then(res=>{
                console.log("request Submitted");
                window.alert("Product Added")
                window.location.reload()
            }).catch((err)=>{
                console.log(err);
            })
            
        }} method='post'>
        <input type="text" placeholder='Enter Product Name' name='name' value={name} onChange={(event)=>{
        setName(event.target.value)
    }} required/>
        <input type="number" placeholder='Enter Product Price' name='price' value={price} onChange={(event)=>{
        setPrice(event.target.value)
    }} required/>
        <input type="company" placeholder='Enter Product company' name='company' value={company} onChange={(event)=>{
        setCompany(event.target.value)
    }} required/>
        <label htmlFor="range">Select rating</label>
        <input type="range" min={0} max={5} id="range" name='rating' value={rating} onChange={(event)=>{
        setRating(event.target.value)
    }}/>
        <label htmlFor="featured">Featured</label><input type="radio" id='featured' name='featured' value="true" onChange={(event)=>{
        setFeatured(event.target.value)
    }}/>
        <label htmlFor="featured">Not Featured</label><input type="radio" name='featured' value="false" onChange={(event)=>{
        setFeatured(event.target.value)
    }}/>
        <input type="submit" value="Submit"/>
    </form>
    </div>
)
}

export default AddProducts