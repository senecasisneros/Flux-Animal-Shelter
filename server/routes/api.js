'use strict';

const express = require('express');
const router = express.Router();

router.use('/animals', require('./animals'));
router.use('/owners', require('./owners'));

module.exports = router;
