import { useEffect, useState } from "react";
import axios from "axios";
import CardComponent from "../../components/card/CardComponent";


function AllProducts({products}) {
   const [allProducts,setAllProducts]=useState([])
  useEffect(() => {
    const fetchProducts = () => {
      axios.get("http://localhost:3000/all-products").then((response) => {
        console.log(`All Products:${response.data.message}`);
        const setArray=[...response.data.data.allProducts];
        setAllProducts(setArray);
      });
    };

    fetchProducts();
  }, []);
  return (
    <div className=" page-container">
      {allProducts.map((product) => {
        return (
          <CardComponent
            rating={product.rating}
            productName={product.name}
            ratingValue={product.rating.$numberDecimal}
            productPrice={product.price}
            Company={product.company}
          />
        );
      })}
    </div>
  );
}

export default AllProducts;
