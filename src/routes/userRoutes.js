const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById, updateUserById, deleteUserById } = require('../controllers/userController');
const { register, login } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.get('/', protect, getAllUsers);
router.get('/:id', protect, getUserById);
router.put('/:id', protect, updateUserById);
router.delete('/:id', protect, deleteUserById);

module.exports = router;
