import express from 'express';
import { createUser, login, logout, signup } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', signup);

router.post('/create-user', createUser);

router.post('/login', login);

router.get('/logout', logout);

export default router;