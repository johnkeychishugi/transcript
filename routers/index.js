import express from 'express';
import userRouter from './users';
import messageRouter from './messages';


const router = express.Router();

router.use(userRouter);
router.use(messageRouter);


export default router;