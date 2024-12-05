const express = require('express');
const router = express.Router();
const maintenanceController = require('../controllers/maintenanceController');

router.post('/', maintenanceController.addMaintenanceLog);
router.get('/', maintenanceController.getMaintenanceHistory);
router.post('/report', maintenanceController.reportIssue);

module.exports = router;
