import React from 'react'

export default function ProductItem(props) {
  return (
      <div className="productItem">
        <div><h3>{props.title}</h3></div>
        <div>Brand: {props.brand}</div>
        <div>Price: {props.price} $</div>
      </div>
  )
}
