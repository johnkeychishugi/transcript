import express from 'express';
import studentController from '../controllers/studentController';

const routers = express.Router();

routers.get("/message",studentController.getStudents)
        .get("/messages",studentController.messages)
        .post("/message",studentController.message);
    
export default routers