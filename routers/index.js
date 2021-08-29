import express from 'express';
import studentRouter from './student';
import sectionRouter from './section';
import departmentRouter from './department';
import courseRouter from './course';

const router = express.Router();

router.use('/students', studentRouter)
      .use('/sections', sectionRouter)
      .use('/departments', departmentRouter)
      .use('/courses', courseRouter);

export default router;