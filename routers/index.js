import express from 'express';
import studentRouter from './student';

const router = express.Router();

router.use('/students',studentRouter);


export default router;