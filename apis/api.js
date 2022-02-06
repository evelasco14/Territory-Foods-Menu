const path = require('path');
const fs = require('fs');
const express = require('express');

// file path to json file 
const filePath = path.join(__dirname, '../public/data', 'menu.json');

const router = express.Router();

// endpoint path http://localhost:3000/meals
router.get('/meals', (req, res) => {
    res.sendFile(filePath);
})

module.exports = router;
