import { useEffect, useState } from "react";
import axios from "axios";
import CardComponent from "../../components/card/CardComponent";

function HomePage({products}) {
  return (
    <div className=" page-container">
      {products.map((product) => {
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

export default HomePage;
