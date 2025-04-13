const express = require('express');
const router = express.Router();
const { Signup, Login, Logout, getProfile } = require('../controllers/userController');
const auth = require('../middleware/authMiddleware');

router.post('/Signup', Signup);
router.post('/Login', Login);
router.post('/Logout', Logout);
router.get('/Profile', auth, getProfile);

module.exports = router;





















































