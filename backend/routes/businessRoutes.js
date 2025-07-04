import express from 'express';
import { getBusinessData, regenerateHeadline } from '../controllers/businessController.js';

const router = express.Router();

router.post('/business-data', getBusinessData);
router.get('/regenerate-headline', regenerateHeadline);

export default router;
