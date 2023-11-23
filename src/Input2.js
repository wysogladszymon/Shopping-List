import './Input2.css'

export default function Input2(){
    return <div className='input-container'>
        <input className='inputs input-product' id='input-product-id' placeholder='product'></input>
        <input className='inputs input-amount' placeholder='amount'></input>
        <div className='check-mark'>&#9989;</div>
    </div>
}