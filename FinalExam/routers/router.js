import { Router } from "express";
import * as appController from "../controllers/conn.js"
import formValidation from "../middlewares/formValidation.js";

const router = Router();

router.get("/", appController.getHome);
router.get('/form', appController.getForm)
router.post('/uploadForm',formValidation,appController.uploadForm)
router.get("/navbar", appController.getNavbar);
router.delete('/deleteNavbar/:id', appController.deleteNavbar)

export default router;
