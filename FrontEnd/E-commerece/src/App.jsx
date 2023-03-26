import { Button } from "@mui/material";
import { InputLabel, OutlinedInput, Select, MenuItem } from "@mui/material";
import { Link, Route, Routes } from "react-router-dom";
import {useState ,useEffect} from 'react'
import axios  from "axios";

import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import AllProducts from "./pages/AllProducts/AllProducts";
import AddProducts from "./pages/AddProducts/AddProducts";

function App() {

  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = () => {
      axios.get("http://localhost:3000/featured-products").then((response) => {
        console.log(`All Products:${response.data.message}`);
        const setArray=[...response.data.data.featuredProducts];
        setAllProducts(setArray);
      });
    };

    fetchProducts();
  }, []);
  
  const onChangehandler = (event) => {
    axios.get(`http://localhost:3000/product-filters?price_lt=${event.target.value}`).then((response) => {
        console.log(`All Products:${response.data.data.filetredProducts}`);
        const setArray=[...response.data.data.filteredProducts];
        setAllProducts(setArray);
      });
  };
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="App">
      <nav className="navigation">
      <Button variant="contained" href="/add-products">
          Add Product
        </Button>
        <Button variant="contained" href="/">
          Featured Products
        </Button>
        <Button variant="contained" href="/all-products" onClick={(event)=>{
          axios.get("http://localhost:3000/all-products").then((response) => {
            console.log(`All Products:${response.data.message}`);
            const setArray=[...response.data.data.allProducts];
            setAllProducts(setArray);
          });
        }}>
          All Products
        </Button>
        <div className="maximum-price">
          <InputLabel htmlFor="sandbox" variant="filled">
            Maximum Price
          </InputLabel>
          <OutlinedInput id="sandbox" onChange={onChangehandler} />
        </div>
        <div className="minimum-rating">
          
          
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage products={allProducts} />}></Route>
        <Route path="/all-products" element={<AllProducts products={allProducts}/>}></Route>
        <Route path="/add-products" element={<AddProducts />}></Route>
      </Routes>
    </div>
  );
}

export default App;
