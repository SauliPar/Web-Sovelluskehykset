import React, { useState } from 'react';

export default function EditorView(props) {
    const[productBrand, setProductBrand] = useState();
    const[productPrice, setProductPrice] = useState();
    const[productTitle, setProductTitle] = useState();
    const[userName, setUserName] = useState();
    const[userEmail, setUserEmail] = useState();
    const[invoiceUser, setInvoiceUser] = useState();
    const[invoiceProduct, setInvoiceProduct] = useState();
    const[invoicePrice, setInvoicePrice] = useState();
    
   
    
function clearProductValues(){
    setProductBrand("");
    setProductPrice("");
    setProductTitle("");
}
function clearCustomerValues(){
    setUserName("");
    setUserEmail("");
}
function clearInvoiceValues(){
    setInvoiceUser("");
    setInvoiceProduct("");
    setInvoicePrice("");
}

  return (
    <div className='editorView' key="editorViewInEditorMode">
        <div>
            <h3>Admin View</h3>
        </div>
    <form className='inputForms'>
        <div key="plainTextProduct">
            Add a new product:
        </div>
        <div>
            Brand <input type="text" key="brand" value={productBrand} onChange={(e) => setProductBrand(e.target.value)}/>
        </div>
        <div>
            Price <input type="number" key="price" value={productPrice} onChange={(e) => setProductPrice(e.target.value)}/>
        </div>
        <div>
            Product Title <input type="text" key="title" value={productTitle} onChange={(e) => setProductTitle(e.target.value)}/>
        </div>
        <div>
        <button type="button" key="button1" onClick={() => {props.addNewProduct(productBrand, productPrice, productTitle); clearProductValues()}}>Add</button>
        </div>
        </form> 
    <form className='inputForms'>
        <div key="plainTextCustomer">
            Add a new customer:
        </div>
        <div>
            Full name <input type="text" key="name" value={userName} onChange={(e) => setUserName(e.target.value)}/>
        </div>
        <div>
            Email <input type="text" key="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)}/>
        </div>
        <div>
        <button type="button" key="button2" onClick={() => {props.addNewUser(userName, userEmail); clearCustomerValues()}}>Add</button>
        </div>
    </form>
    <form className='inputForms'>
        <div key="plainTextInvoice">
            Add a new invoice:
        </div>
        <div>
            Full name <input type="text" key="name" value={invoiceUser} onChange={(e) => setInvoiceUser(e.target.value)}/>
        </div>
        <div>
            Product <input type="text" key="invoiceProduct" value={invoiceProduct} onChange={(e) => setInvoiceProduct(e.target.value)}/>
        </div>
        <div>
            Price <input type="text" key="invoicePrice" value={invoicePrice} onChange={(e) => setInvoicePrice(e.target.value)}/>
        </div>
        <div>
        <button type="button" key="button3" onClick={() => {props.checkInvoiceUser(invoiceUser, invoiceProduct, invoicePrice); clearInvoiceValues()}}>Add</button>
        </div>
    </form>
    <hr/>
        <div className='editorProduct'>
        <strong>List of Products:</strong>
            {props.products.map(p => 
               <div className='outside'>
                    <li key={p.id}>Product Id: {p.id}</li>
                    <li key={p.title}>Title: {p.title}</li>
                    <li key={p.price}>Price: {p.price}$</li>
                    <button onClick={() => props.onProductDelete(p)}> Delete Product </button>
               </div> 
            )}
        </div>
        <div className='editorCustomer'>
            <strong>List of Users:</strong>
            {props.customers.map(u => 
               <div className='outside'>
                    <li key={u.userId}>User Id: {u.userId}</li>
                    <li key={u.userName}>Full name: {u.userName}</li>
                    <li key={u.userEmail}>Email: {u.userEmail}</li>
                    <button onClick={() => props.onUserDelete(u)}> Delete User </button>
               </div> 
            )}
        </div>
        <div className='editorInvoice'>
            <strong>List of Invoices:</strong>
            {props.invoices.map(i => 
               <div className='outside'>
                    <li key={i.invoiceId}>Invoice Id: {i.invoiceId}</li>
                    <li key={i.customer}>Invoice Customer: {i.customer}</li>
                    <li key={i.product}>Product: {i.product}</li>
                    <li key={i.price}>Price: {i.price} $</li>
                    <li key={i.date}>Date: {i.date}</li>
                    <button onClick={() => props.onInvoiceDelete(i)}> Delete Invoice </button>
               </div> 
            )}
        </div>
    </div>
  )
}