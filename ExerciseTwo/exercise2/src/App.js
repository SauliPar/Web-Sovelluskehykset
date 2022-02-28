import logo from './logo.svg';
import './App.css';
import ShoppingListItems from './components/ShoppingListItems';
import Header from './components/Header';
import { useState } from 'react';

function App() {

  const nameOfMilk = "Maitoa";
  const nameOfBread = "Leipää";
  const nameOfCheese = "Juustoa";
  const idOfMilk = 1;
  const idOfBread = 2;
  const idOfCheese = 3;
  
  const [shoppingListItems, setShoppingListItems] = useState([
  ]);

  const onAddMilk = ()  => {
    onAddShoppingListItem(nameOfMilk, idOfMilk);
  }
  const onAddBread = ()  => {
    onAddShoppingListItem(nameOfBread, idOfBread);
  }
  const onAddCheese = ()  => {
    onAddShoppingListItem(nameOfCheese, idOfCheese);    
  }

  const onAddShoppingListItem = (shoppingListItemName, id) => {
    let quantity = Math.floor((Math.random() * 10) + 1);
    let newShoppingListItems = [...shoppingListItems];
    let indexOfItem = newShoppingListItems.findIndex( shoppingListItem => shoppingListItem.name === shoppingListItemName)
    if (indexOfItem !== -1) {
      let newElement = {...newShoppingListItems[indexOfItem]};
      newElement.qty = newElement.qty + quantity;
      newShoppingListItems[indexOfItem] = newElement;
    }
    else {
      newShoppingListItems = [...shoppingListItems, {
        id: id,
        name: shoppingListItemName,
        qty: quantity,
        isChecked: false
      }];
    }
    setShoppingListItems(newShoppingListItems);
  }
  function resetShoppingList(){
    let resetProducts = [];
    setShoppingListItems(resetProducts);
  }

  return (
    <div className="App">
      <Header />
      <ShoppingListItems listItems = { shoppingListItems} 
      />
      <button onClick={ onAddMilk } >Lisää maitoa :D</button>
      <button onClick={ onAddBread} >Lisää LEIPPÄÄ :D</button>
      <button onClick={ onAddCheese} >Lisää cheeseää :D</button>
      <button onClick={ resetShoppingList} >Nollaa ostoslista :D</button>
    </div>
  );
}

export default App;
