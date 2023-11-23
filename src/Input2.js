import './Input2.css'

export default function Input2(){
    return <div className='input-container'>
        <input className='inputs input-product' id='input-product-id' placeholder='product' pattern="[A-Za-z0-9]+"></input>
        <input className='inputs input-amount' placeholder='amount' pattern="[0-9]+"></input>
        {/* <div className='check-mark'>&#9989;</div> */}
    </div>
}