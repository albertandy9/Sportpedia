import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StroreContext'
const PlaceOrder = () => {

    const {getTotalCart} = useContext(StoreContext);

  return (
    <form className='place-order'>
        <div className="place-order-left">
            <p className='title'>Purchase Information</p>
            <div className="multi-fields">
                <input type="text" placeholder='First Name' />
                <input type="text" placeholder='Last Name' />
            </div>
            <input type="text" placeholder='Email Address'/>
            <input type="text" placeholder='Address' />
            <div className="multi-fields">
                <input type="text" placeholder='City' />
                <input type="text" placeholder='Province' />
            </div>
            <div className="multi-fields">
                <input type="text" placeholder='Zip Code' />
                <input type="text" placeholder='Country' />
            </div>
            <input type="text" placeholder='Phone Number' />
        </div>
        <div className="place-order-right">
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
            <button>PAYMENT</button>
        </div>
        </div>
      
    </form>
  )
}

export default PlaceOrder
