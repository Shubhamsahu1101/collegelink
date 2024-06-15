import express from 'express';
import { createListing, updateListing, deleteListing } from '../controllers/listing.controller';
import { verifyToken } from '../utils/verifyToken';

const router = express.Router();

router.post('/create', verifyToken, createListing);

router.post('/update/:id', verifyToken, updateListing);

router.delete('/delete/:id', verifyToken, deleteListing);

export default router;