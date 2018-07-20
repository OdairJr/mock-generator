const express = require('express');
const path = require('path');

const router = express.Router();

const inteceptorController = require('../controllers/intercept.controller')
/**
 * GET status
 */
router.get('/status', (req, res, next) => res.sendFile(path.join(__dirname, '../../app', 'index.html')));

// Interceptor of requests
router.get('*', inteceptorController.intercept);
router.post('*', inteceptorController.intercept);


module.exports = router;
