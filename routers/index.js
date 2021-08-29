import express from 'express';
import studentRouter from './student';
import sectionRouter from './section';


const router = express.Router();

router.use('/students',studentRouter)
      .use('/sections',sectionRouter);

export default router;