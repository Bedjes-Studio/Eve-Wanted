const express = require('express');
const router = express.Router();

const statusCtrl = require('../controllers/status');

router.get('/status', auth, statusCtrl.status);

module.exports = router;