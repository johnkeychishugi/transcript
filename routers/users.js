import express from 'express';
import userController from '../controllers/userController';

const routers = express.Router();

routers.get("/login",userController.loginShow)
        .post("/login",userController.login)
        .get("/register",userController.registerShow)
        .post("/register",userController.register);

        
export default routers