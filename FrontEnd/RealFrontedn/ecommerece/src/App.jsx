import { Button } from "@mui/material";
import {LinkedIn,GitHub,Mail} from '@mui/icons-material';
import {Link,Route,Routes} from 'react-router-dom'

import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import AllProducts from "./pages/AllProducts/AllProducts";

function App() {
  return (
    <div className="App">
      <>
        <nav className="navigation">
          <Button variant="contained" href="/">
            Featured Products
          </Button>
          <Button variant="contained" href="/all-products">
            All Products
          </Button>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage/>} ></Route>
          <Route path="/all-products" element={<AllProducts/>}></Route>
        </Routes>
        <footer className="footer">
          <div className="footer-icon-group">
          <LinkedIn fontSize="large" />
          <GitHub fontSize="large" />
          <Mail fontSize="large" />
          </div>
        </footer>
</>
    </div>
  );
}

export default App;
