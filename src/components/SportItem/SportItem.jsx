import React, { useContext } from 'react'
import './SportItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StroreContext'

const SportItem = ({id,name,price,description,image}) => {

    // const[itemCount,setItemCount] = useState(0)
    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);

  return (
    <div className='sport-item'>
        <div className="sport-item-img-container">
            <img className='sport-item-image'src={image} alt="" />
            {!cartItems[id]
                ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
                :<div className="sport-item-counter">
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                </div>
            }
        </div>
        <div className="sport-item-info">
            <div className="sport-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="sport-item-desc">{description}</p>
            <p className="sport-item-price">Rp. {price}</p>
        </div>
    </div>
  )
}

export default SportItem
