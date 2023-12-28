import { Router } from "express";
import * as appController from "../controllers/conn.js"

const router = Router();

router.get("/", appController.getHome);
router.get('/form', appController.getForm)

export default router;
