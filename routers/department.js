import express from 'express';
import departmentController from '../controllers/departmentController';

const routers = express.Router();

routers.get("/all",departmentController.getAll);
    
export default routers