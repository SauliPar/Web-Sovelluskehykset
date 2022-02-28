const express = require('express')
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

const invoices = [
   {
        invoiceId: uuidv4(),
        customer: "Lasse Laskukas",
        product: "Apple iPhone 13",
        price: 500,
        date: "18/2/2022"
   }
];

router.get('/', (req, res) => {
    res.json(invoices)
}); 

router.get('/:invoiceId', (req, res) => {
    let foundIndex = invoices.findIndex(p => p.invoiceId == req.params.invoiceId);
    if(foundIndex == -1) {
        res.sendStatus(404);
    } 
    else {
        res.json(invoices[foundIndex]);
    }
});

 router.get('/user/:customer', (req, res) => {
     let result = invoices.filter(p => p.customer == req.params.customer);
     if(result) {
         res.json(result);
     } 
     else {
         res.sendStatus(404);
     }
 });

router.post('/', (req, res) => {
    invoices.push({
        invoiceId: uuidv4(),
        product: req.body.product,
        price: req.body.price,
        date: req.body.date
    });
    res.sendStatus(201);
});


router.delete('/:invoiceId', (req, res) => {
    let foundIndex = invoices.findIndex(p => p.invoiceId == req.params.invoiceId);
    if(foundIndex == -1) {
        res.sendStatus(404);
    }
    else {
        invoices.splice(foundIndex, 1);
        res.sendStatus(202);
    }
 });


module.exports = router