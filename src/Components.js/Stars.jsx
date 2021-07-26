import React , {useState} from 'react'
import star from '../Images/star.png'
import Rating from './Rating'

function Stars() {
  
    return (
    <div className="Stars">
      <img src={star} alt="" width={100}/>
      <img src={star} alt="" width={100}/>
      <img src={star} alt="" width={100}/>
      <img src={star} alt="" width={100}/>
      <img src={star} alt="" width={100}/>
    </div>
  )
}

export default Stars
