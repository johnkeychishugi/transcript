import express from 'express';
import studentRouter from './student';
import sectionRouter from './section';
import departmentRouter from './department';

const router = express.Router();

router.use('/students',studentRouter)
      .use('/sections',sectionRouter)
      .use('/departments',departmentRouter);

export default router;