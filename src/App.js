import "./App.css";
import List from "./List";
import Button from "./Button";

function click(id) {
  const myInput = document.getElementById(id);
  const amountInput = document.querySelector(".input-amount");

  myInput.value = "";
  amountInput.value='';
  myInput.focus();
}
// export function click2() {
//   document.addEventListener("click", () => {
//     const productInput = document.querySelector(".input-product");
//     const container = document.querySelector(".input-container");

//     if (productInput.focus === true || amountInput.focus === true) {
//       container.classList.add("focus");
//     } else {
//       container.classList.remove("focus");
//     }
//   });
// }

function App() {
  return (
    <div className="App">
      <main className="main">
        <List></List>
        <Button title="add product" onClick={() => click("input-product-id")} />
      </main>
    </div>
  );
}

export default App;
