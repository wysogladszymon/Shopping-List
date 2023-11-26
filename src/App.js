import "./App.css";
import React, { useState, useRef } from "react";
import { List, Button, Product, Input2 } from "./components";
import { products } from "./constants/products-data";


function App() {
  let [productsDict, setproductsDict] = useState(products);
  let [invalidAmount, setInvaildAmount] = useState(false);
  let [invalidWord, setInvaildWord] = useState(false);
  let [currWord, changeWord]= useState('');
  let [currAmount, changeAmount] = useState('');

  const updatedProducts = { ...products };

  function click(id) {
    const myInput = document.getElementById(id);
    changeWord('');
    changeAmount('');
    myInput.focus();
  }

  function deleteProduct(name) {
    delete updatedProducts[name];
    delete products[name];
    setproductsDict(updatedProducts);
  }

  function checkWord(word){ //checks if our word contains only letters
    const regex = /^[a-zA-z]+$/;
    const isValid = regex.test(word);
    if (isValid || word === ''){
      setInvaildWord(false);
      return true;
    }
    else{
      setInvaildWord(true);
      return true;
    }

  }

  function checkAmount(amount){ //checks if our amount contains only digits
    if (!isNaN(amount)){
      setInvaildAmount(false);
      return true;
    }
    else{
      setInvaildAmount(true);
      return false;
    }
  }

  function changeInput1(value){
    changeWord(value);
    checkWord(value);
  }

  function changeInput2(value){
    changeAmount(value);
    checkAmount(value);
  }

  function clickInput1(event){
    const keyPressed = event.key;
    // console.log(keyPressed);
    const change = document.querySelector('.input-amount');
    if (['Enter', 'Tab'].includes(keyPressed)){
      change.focus();
    }
  }

  function addProduct(key, value){
    const boolAmount = checkAmount(currAmount);
    const boolProduct = checkWord(currWord);
    if (boolProduct && boolAmount && currAmount !== '' && currWord !== ''){ //checks if it is valid
      if (key in products){ //if it is already in dict, sum the values
        updatedProducts[key] = String(Number(updatedProducts[key]) + Number(value));
        products[key] = String(Number(products[key]) + Number(value));
      }
      else{
        updatedProducts[key] = value;
        products[key] = value;
      }
      setproductsDict(updatedProducts);
      changeWord('');
      changeAmount('');
    }
    else if (currAmount === '' || currWord === ''){
      //add information that one of inputs is empty
    }
    else{
      return //add information that inputs are incorrect
    } 
  }
  function clickInput2(event){
    const keyPressed = event.key;
    const focus = document.querySelector('.input-product');

    if (keyPressed === 'Enter'){
      addProduct(currWord,currAmount)
      focus.focus();
    }
  }
  return (
    <div className="App">
      <main className="main">
        <List>
          <Input2
            productID="input-product-id"
            errorAmount={invalidAmount}
            errorProduct={invalidWord}
            productVal={currWord}
            amountVal={currAmount}
            changeProduct={(event) => changeInput1(event.target.value)}
            changeAmount={(event) => changeInput2(event.target.value)}
            keyDownAmount={(event) => clickInput2(event)}
            keyDownProduct={(event) => clickInput1(event)}
          />
          {/* adding elements to our Shopping List */}
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
