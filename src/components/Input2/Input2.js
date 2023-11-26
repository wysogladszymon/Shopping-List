import "./Input2.css";

export function Input2({errorProduct, errorAmount, productID, amountID,amountVal, productVal, changeProduct, changeAmount, keyDownAmount, keyDownProduct}) {

  return (
    <form className="input-container">
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
      {/* <div className='check-mark'>&#9989;</div> */}
    </form>
  );
}
