const express = require('express');
const router = express.Router();

const {getEmissionsStatisticsController} = require('../controller/controller')

router.post('/statistics', getEmissionsStatisticsController)

module.exports = router;