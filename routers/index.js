import express from 'express';
import studentRouter from './student';

const router = express.Router();

router.use(studentRouter);


export default router;