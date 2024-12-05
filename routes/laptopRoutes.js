const express = require('express');
const router = express.Router();
const laptopController = require('../controllers/laptopController');

router.get('/', laptopController.getLaptops);
router.post('/', laptopController.addLaptop);
router.put('/:id', laptopController.updateLaptop);
router.delete('/:id', laptopController.deleteLaptop);

module.exports = router;
