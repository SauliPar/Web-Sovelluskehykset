import React from 'react'
import Header from './Header'
import ProductItem from './ProductItem'

export default function ProductView(props) {
  return ( 
      <div>
        <Header onSearchChange = {props.filteredProductsCallBack}/>
        <div className='productContainer'>
            {props.displayedProducts.map(p => <ProductItem key="renderProduct3" id={p.id} title={p.title} brand={p.brand} price={p.price} />)} 
        </div>
  </div>
    )
}
