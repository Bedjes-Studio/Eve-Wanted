const express = require('express');
const router = express.Router();

const statusCtrl = require('../controllers/status');
const userCtrl = require('../controllers/user');

router.get('/status', statusCtrl.status);
router.get('/mostWanted', userCtrl.mostWanted);


module.exports = router;