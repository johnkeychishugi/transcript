import express from 'express';
import courseController from '../controllers/courseController';

const routers = express.Router();

routers.get("/all",courseController.getAll);
    
export default routers