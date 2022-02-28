const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

const products = [
    { 
        id : uuidv4(),
        title: 'Apple iPhone 13',
        brand: 'Apple',
        price: 1800,
        img: 'iphone13.png',
    },
    { 
        id : uuidv4(),
        title: 'Samsung Galaxy S22',
        brand: 'Samsung',
        price: 999,
        img: 'galaxys22.png',
    },
    { 
        id : uuidv4(),
        title: 'Asus Tuf Gaming Monitor',
        brand: 'Asus',
        price: 500,
        img: 'asustuf.png',
    },
    { 
        id : uuidv4(),
        title: 'BenQ EX2780Q',
        brand: 'BenQ',
        price: 600,
        img: 'benq_ex2780q.png',
    },
];


router.get('/', (req, res) => {
    res.json(products)
}); 

router.get('/:id', (req, res) => {
    let foundIndex = products.findIndex(p => p.id == req.params.id);
    if(foundIndex == -1) {
        res.sendStatus(404);
    } 
    else {
        res.json(products[foundIndex]);
    }
})

router.post('/', (req, res) => {
    console.log(req.body);
    products.push({
        id: uuidv4(),
        title: req.body.title,
        brand: req.body.brand,
        price: req.body.price,
    });
    res.sendStatus(201);
});

router.put('/:id', (req, res) => {
    let product = products.find(p => p.id == req.params.id);
    if (product) {
        product.brand = req.body.brand,
        product.title = req.body.title,
        product.price = req.body.price,
        res.sendStatus(202);
    }
    else {
        res.sendStatus(404);
    }
});

router.delete('/:id', (req, res) => {
    let foundIndex = products.findIndex(p => p.id == req.params.id);
    if(foundIndex == -1) {
        res.sendStatus(404);
    }
    else {
        products.splice(foundIndex, 1);
        res.sendStatus(202);
    }
 });


module.exports = router;