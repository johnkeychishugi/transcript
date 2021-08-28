import express from 'express';
import messageController from '../controllers/messageController';

const routers = express.Router();

routers.get("/message",messageController.messageShow)
        .get("/messages",messageController.messages)
        .post("/message",messageController.message);
    
export default routers