import "./App.css";
import List from "./List";
import Button from "./Button";

function App() {
  return (
    <div className="App">
      <main className="main">
        <List></List>
        <Button title="add product"/>
      </main>
    </div>
  );
}

export default App;
