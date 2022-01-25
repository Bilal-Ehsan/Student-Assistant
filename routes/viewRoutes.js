const express = require('express');

const viewController = require('../controllers/viewController');
// ...

const router = express.Router();

router.get('/', viewController.displayTest);

module.exports = router;
