
const express = require('express');


const Calculadora = require('../controllers/contrCalc');


const calculadora = new Calculadora();


const router = express.Router();

router.post('/api/soma', calculadora.Soma);
router.post('/api/sub', calculadora.Sub);
router.post('/api/mult', calculadora.Mult);
router.post('/api/div', calculadora.Div);
router.post('/api/expo', calculadora.Expo);
router.post('/api/raiz', calculadora.Raiz);



module.exports = router;
