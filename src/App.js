import "./App.css";
import React, { useState } from "react";
import { List, Button, Product } from "./components";
import { products } from "./constants/products-data";

function click(id) {
  const myInput = document.getElementById(id);
  const amountInput = document.querySelector(".input-amount");

  myInput.value = "";
  amountInput.value = "";
  myInput.focus();
}

function App() {
  let [productsDict, setproductsDict] = useState(products);
  const updatedProducts = {...products};
  function deleteProduct(name) {
    delete updatedProducts[name];
    delete products[name];
    setproductsDict(updatedProducts);
  }
  let productsinList = Object.entries(productsDict);

  return (
    <div className="App">
      <main className="main">
        <List>
          {/* dodanie elementów do listy */}
          {Object.entries(productsDict).map(([product, amount], key) => (
            <Product
              key={key}
              title={product}
              amount={amount}
              crossOnClick={() => deleteProduct(product)}
            ></Product>
          ))}
        </List>
        <Button title="add product" onClick={() => click("input-product-id")} />
      </main>
    </div>
  );
}

export default App;
