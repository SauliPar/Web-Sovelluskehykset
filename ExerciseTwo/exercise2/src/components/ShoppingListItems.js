import React from 'react'

export default function ShoppingListItems(props) {
  
  function test(){
      console.log('Click');
  }
  
  return (
      <div className="ListItem" >
          <ul>
              {
                  props.listItems.map((item, index) => {
                      return <li onClick={ test } key={index} className= {item.isChecked ? "isChecked" : null}>
                          {item.qty} {item.name}
                      </li>
                  })
              }
          </ul>
      </div>)
}