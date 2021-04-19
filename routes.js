const express = require('express');
const controllers = require('./controllers');

const router = express.Router();

router.get('/test', controllers.test);
router.get('/list', controllers.listGet);

module.exports = router;
