import React, { useContext } from 'react'
import './ItemDisplay.css'
import { StoreContext } from '../../context/StroreContext'
import SportItem from '../SportItem/SportItem'

const ItemDisplay = ({category}) => {

    const {sport_list} = useContext(StoreContext)
  return (
    <div className='item-display' id='item-display'>
        <h2>Recommended for you</h2>
        <div className="item-display-list">
            {sport_list.map((item,index)=>{
                if (category==="All" || category===item.category){
                    return <SportItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />    
                }
            })}
        </div>
    </div>
  )
}

export default ItemDisplay
