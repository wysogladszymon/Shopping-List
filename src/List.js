import "./List.css";
import Product from "./Product";
import Input from "./Input";
import { products } from "./data";
import Input2 from "./Input2";

export default function List(props) {
  const cls = props.className ? `list ${props.className}` : "list";

  return (
    <div className={cls}>
      <h1 className="list-title">Shopping List</h1>
      <Input2 />
      {products.map((elem, index) => (
        <Product key={index} title={elem} />
      ))}
    </div>
  );
}
