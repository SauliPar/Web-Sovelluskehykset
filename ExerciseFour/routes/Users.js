const express = require('express')
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

const users = [
    { 
        userId: uuidv4(),
        userName: 'Pertti Perttinen',
        userEmail: 'perttinen@gmail.com',
    },
];

router.get('/', (req, res) => {
    res.json(users)
}); 

router.post('/', (req, res) => {
    console.log(req.body);
    users.push({
        id: uuidv4(),
        userName: req.body.userName,
        userEmail: req.body.userEmail,
    });
    res.sendStatus(201);
});

module.exports = router