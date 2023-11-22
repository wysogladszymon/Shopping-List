import "./Product.css";

export default function Product(props) {
  const cls = props.className ? `product ${props.className}` : "product";

  return (
    <li id={props.id} className={cls} onClick={props.onClick}>
      {props.title}
      <div className='cancel-cross' onClick={props.onClick}>&#10060;</div>
    </li>
  );
}
