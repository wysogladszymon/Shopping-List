import "./Product.css";

export function Product(props) {
  const cls = props.className ? `product ${props.className}` : "product";

  return (
    <li id={props.id} className={cls} onClick={props.onClick}>
      <input type='checkbox' className='checkbox'></input>
      <div className='product-title'>{props.title}</div>
      <input className='product-amount' placeholder={props.amount}></input>
      <div className="cancel-cross" onClick={props.crossOnClick}>
        &#10060;
      </div>
    </li>
  );
}
