import "./List.css";
import Product from "./Product";
import Input from "./Input";
import { products } from "./data";

export default function List(props) {
  const cls = props.className ? `list ${props.className}` : "list";

  return (
    <div className={cls}>
      <h1 className="list-title">Shopping List</h1>
      <Input />
      {products.map((elem, index) => (
        <Product key={index} title={elem} />
      ))}
    </div>
  );
}
