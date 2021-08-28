import express from 'express';
import studentController from '../controllers/studentController';

const routers = express.Router();

routers.get("/create",studentController.createView)
        .post("/store",studentController.store)
        .post("/destroy/:id",studentController.destroy);
    
export default routers