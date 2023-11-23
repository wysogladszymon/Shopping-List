import "./App.css";
import List from "./List";
import Button from "./Button";

function click(){
  const myInput = document.getElementById('my-input');
  if (document.activeElement !== myInput)
  {
    myInput.value = '';
    myInput.focus();
  }
};


function App() {
  
  return (
    <div className="App">
      <main className="main">
        <List></List>
        <Button title="add product" onClick={click}/>
      </main>
    </div>
  );
}

export default App;
