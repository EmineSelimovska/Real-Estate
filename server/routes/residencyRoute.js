import express from 'express';
import { createResidency, getAllResidencies, getResidencyById } from '../controllers/residencyController.js';

const router = express.Router();

router.post('/create', createResidency);
router.get('/allRes', getAllResidencies);
router.get("/:id", getResidencyById);

export {router as residencyRoute}