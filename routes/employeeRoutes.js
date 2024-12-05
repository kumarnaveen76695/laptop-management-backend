const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

router.get('/', employeeController.getEmployees);
router.post('/assign', employeeController.assignLaptop);
router.get('/:employeeId/laptops', employeeController.getEmployeeLaptops);

module.exports = router;
