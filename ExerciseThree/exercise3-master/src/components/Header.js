import React from 'react'

export default function Header(props) {

  return (
    <div className='Header'>
        <div><img src="amazonlogo.png" alt = "Amazon Logo" /></div> 
        <div className='searchInputClass'><input type="text" placeholder='Search..'
        onChange={(e) => props.onSearchChange(e.target.value, props.products)} />
        </div>
    </div>
  )
}
