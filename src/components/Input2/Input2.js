import "./Input2.css";

export function Input2({children,errorProduct, errorAmount, productID, amountID,amountVal, productVal, changeProduct, changeAmount, keyDownAmount, keyDownProduct}) {

  return (
    <div className="input-container">
      <form className='myForm'>
      <input
        placeholder="product"
        className={errorProduct ? "inputs input-product error-input" : "inputs input-product"}
        id = {productID}
        required
        value = {productVal}
        onChange = {changeProduct}
        onKeyDown={keyDownProduct}
      />
      <input
        placeholder="amount"
        className={errorAmount ? 'inputs input-amount error-input ':"inputs input-amount"}
        id = {amountID}
        required
        value = {amountVal}
        onChange = {changeAmount}
        onKeyDown={keyDownAmount}
      />
      </form>
      {children}
    </div>
  );
}
