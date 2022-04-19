const express = require('express');

const viewController = require('../controllers/viewController');
// ...

const router = express.Router();

// NOTE: Should also add a middleware function to check if the user is logged in where appropriate
router.get('/', viewController.getHomeView);
router.get('/dashboard', viewController.getDashboardView);
router.get('/profile', viewController.getProfileView);
router.get('/login', viewController.getLoginView);
router.get('/register', viewController.getRegisterView);

module.exports = router;
