import express from 'express';
import sectionController from '../controllers/sectionController';

const routers = express.Router();

routers.get("/all", sectionController.getAll);

export default routers