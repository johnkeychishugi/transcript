import express from 'express';
import studentController from '../controllers/studentController';

const routers = express.Router();

routers.get("/create",studentController.createView)
        .post("/message",studentController.message);
    
export default routers