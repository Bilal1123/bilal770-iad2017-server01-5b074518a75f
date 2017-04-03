var express = require('express');
var router = express.Router();
var main = require('./controllers/main');
var calculator = require('./controllers/calculator');

/* Registering All the routes */
router.get('/', main.home);
router.post('/login', main.login);
router.post('/signup', main.signup);

router.post('/addOperation', calculator.add);
router.post('/subtractOperation', calculator.subtract);
router.post('/multiplyOperation', calculator.multiply);
router.post('/divideOperation', calculator.divide);
router.post('/marksheetOperation', calculator.marksheet);
/****/




module.exports = router;



