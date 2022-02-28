import './App.css';
import EditorView from './components/EditorView';
import ProductView from './components/ProductView';
import React, { useState } from 'react';

let allProducts=[{
  id: 1,
  title: "Nokia N9",
  brand: "Nokia",
  price: 300
}];
let allCustomers=[{
  userId: 1,
  userName: "Petri Petrinen",
  userEmail: "petrinen666@gmail.com",
}];
let allInvoices=[{
  invoiceId: 1,
  customer: "Lasse Laskukas",
  product: "Nokia N9",
  price: 300,
  date: "15/02/2022"
}];

function App() {
  const [editorModeOn, setEditorModeOn] = useState(false);
  const [products, setProducts] = useState(allProducts);
  const [users, setUsers] = useState(allCustomers);
  const [invoices, setInvoices] = useState(allInvoices);

  function filterProducts(searchInput){
    console.log(searchInput);
    const filteredData = allProducts.filter(item => {
      return Object.keys(item).some(key =>
        item[key].toString().toLowerCase().includes(searchInput.toLowerCase())
      );
    });
    setProducts(filteredData);
  }

  let output = <ProductView key="renderProductView" filteredProductsCallBack = {filterProducts} displayedProducts = {products} />;
  if (editorModeOn === true){
    output = <EditorView key="renderEditorView" onProductDelete = {deleteItem} onUserDelete = {deleteUser} 
    products = {allProducts} addNewProduct = {addNewProduct} addNewUser = {addNewUser} customers = {allCustomers} 
    displayedUsers = {users} invoices = {allInvoices} displayedInvoices = {invoices} 
    onInvoiceDelete = {deleteInvoice} checkInvoiceUser = {checkData}/>;
  }

  function toggleEditorMode(){
    setEditorModeOn(!editorModeOn);
  }
  function deleteItem(itemToDelete){
    const filteredData = allProducts.filter(item =>  
      item !== itemToDelete
    );
    allProducts = filteredData;
    setProducts(allProducts);
  }
  function deleteUser(userToDelete){
    const filteredData = allCustomers.filter(item =>  
      item !== userToDelete
    );
    allCustomers = filteredData;
    setUsers(allCustomers);
  }
  function deleteInvoice(invoiceToDelete){
    const filteredData = allInvoices.filter(item =>  
      item !== invoiceToDelete
    );
    allInvoices = filteredData;
    setInvoices(allInvoices);
  }
  function addNewProduct(productBrand, productPrice, productTitle){
    let newProducts = [...allProducts, {
      id: allProducts.length +1,
      title: productTitle,
      brand: productBrand,
      price: productPrice
    }];
    allProducts = newProducts;
    setProducts(allProducts);
  }
  function addNewUser(importedName, importedEmail){
    let newUser = [...allCustomers, {
      userId: allCustomers.length +1,
      userName: importedName,
      userEmail: importedEmail,
    }];
    allCustomers = newUser;
    setUsers(allCustomers);
  }
  function checkData(invoiceUser, invoiceProduct, invoicePrice){
    let userName = [...invoiceUser];
    let userNameParsed = userName.join("").toString().toLowerCase();
    let productName = [...invoiceProduct];
    let productNameParsed = productName.join("").toString().toLowerCase();
    console.log(userNameParsed);
    console.log(productNameParsed);
    
    let filteredUserNames = allCustomers.filter(item =>  
      item.userName).map(field=>field.userName
    );
    let filteredProductNames = allProducts.filter(item =>  
      item.title).map(field=>field.title
    );
      console.log(filteredProductNames);
    let userNameMatch = filteredUserNames.find(element => 
      element.toLowerCase().includes(userNameParsed));
    let productNameMatch = filteredProductNames.find(element => 
      element.toLowerCase().includes(productNameParsed));
      console.log(productNameMatch);
    
      if (userNameMatch.toLowerCase() === userNameParsed && productNameMatch.toLowerCase() === productNameParsed){
        addNewInvoice(invoiceUser, invoiceProduct, invoicePrice);
      }  
      else {
        console.log("Tiedot eivät vastaa tietokannan käyttäjiä ja/tai tuotteita");
      }
  }
  function addNewInvoice(importedUser, importedProduct, importedPrice){
    
    let newInvoice = [...allInvoices, {
      invoiceId: allInvoices.length +1,
      customer: importedUser,
      product: importedProduct,
      price: importedPrice,
      date: setDate(),
    }];
    allInvoices = newInvoice;
    console.log(allInvoices);
    setInvoices(allInvoices);
  }
  function setDate(){
  const current = new Date();
   let date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
   return date;

  }
  
  return (
  <div className='App'>
      <div className='adminMode'>
          <button onClick={toggleEditorMode}>Admin Mode Toggle</button>
        </div>
      <div>{output}</div>
  </div>
  );
}

export default App;
