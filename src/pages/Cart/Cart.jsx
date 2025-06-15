import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StroreContext'
import { useNavigate } from 'react-router-dom';
const Cart = () => {

    const{cartItems,sport_list,removeFromCart,getTotalCart} = useContext(StoreContext);

    const navigate = useNavigate();


  return (
    <div className='cart'>
        <div className="cart-items">
            <div className="cart-items-title">
                <p>Items</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <br />
            <hr />
            {sport_list.map((item,index)=>{
                if(cartItems[item._id]>0){
                    return(
                        <div>
                            <div className='cart-items-title cart-items-item'>
                            <img src={item.image} alt="" />
                            <p>{item.name}</p>
                            <p>Rp. {item.price}</p>
                            <p>{cartItems[item._id]}</p>
                            <p>Rp. {item.price*cartItems[item._id]}</p>
                            <p onClick={()=>removeFromCart(item._id)}className='cross'>x</p>
                        </div>
                        <hr />  
                        </div>
                    )
                }
            })}
        </div>
      <div className="cart-bottom">
        <div className="cart-total">
            <h2>Total Items</h2>
            <div>
                <div className="cart-total-detail">
                    <p>SubTotal</p>
                    <p>Rp. {getTotalCart()}</p>
                </div>
                <div className="cart-total-detail">
                    <b>Total</b>
                    <b>Rp. {getTotalCart()}</b>
                </div>

            </div>
            <button onClick={()=>navigate('/order')}>CHECKOUT</button>
        </div>
        <div className="cart-promocode">
            <div>
                <p>Enter your voucher code</p>
                <div className='promo-input'>
                    <input type="text" placeholder='Voucher code' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
