import { products } from "../../constants/products-data";
import { Input2 } from "../Input2";
import { Product } from "../Product";

import "./List.css";

export function List(props) {
  const cls = props.className ? `list ${props.className}` : "list";

  return (
    <div className={cls}>
      <h1 className="list-title">Shopping List</h1>
      <Input2 />
      {props.children}
    </div>
  );
}
