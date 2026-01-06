import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Product from "./Product.jsx";

const myProduct = [
  { title: "Milk", price: 1.75, onSale: true },
  { title: "Beef", price: 7.1, onSale: false },
  { title: "Soup", price: 1.15, onSale: true },
];
function App() {
  return (
    <>
      {myProduct.map((product, index) => (
        <Product
          key={index}
          title={product.title}
          price={product.price}
          onSale={product.onSale}
        />
      ))}
    </>
  );
}

export default App;
