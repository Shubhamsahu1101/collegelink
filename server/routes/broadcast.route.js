import express from 'express';
import { createBroadcast, getBroadcasts } from '../controllers/broadcast.controller.js';

const router = express.Router();

router.post('/create-broadcast', createBroadcast);

router.get('/get-broadcasts', getBroadcasts);

export default router;