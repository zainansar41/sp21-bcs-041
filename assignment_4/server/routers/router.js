import { Router } from "express";
import * as ApiControllers from "../controllers/apis/apiCon.js";
import * as AppControllers from "../controllers/appcon/appCon.js";
import auth from "../middlewares/auth.js";
import appAuth from "../middlewares/appAuth.js";

const router = Router();

router.route("/api/get").get(ApiControllers.getMethod);
router.route("/api/register").post(ApiControllers.register);
router.route("/api/login").post(ApiControllers.login);
router.route('/login').get(AppControllers.GetLogin)
router.route('/signup').post(AppControllers.PostSignup)
router.route('/login').post(AppControllers.PostLogin)
router.route('/home').get(appAuth, AppControllers.GetHome)
router.route('/uploadNavbar').post(AppControllers.uploadNavbar)
router.route('/api/navbars').get(ApiControllers.getAllNavbars)
router.route('/testimonial').get(appAuth,AppControllers.GetTestimonial)
router.route('/uploadTestimonial').post(AppControllers.uploadTestimonial)
router.route('/api/testimonials').get(ApiControllers.GetAllTestimonial)
router.route('/footer').get(appAuth,AppControllers.GetFooter)
router.route('/uploadFooter').post(AppControllers.uploadFooter)
router.route('/api/footers').get(ApiControllers.GetAllFooter)
router.route('/hero').get(appAuth,AppControllers.GetHero)
router.route('/uploadHero').post(AppControllers.uploadHero)
router.route('/api/heros').get(ApiControllers.getAllHeros)


export default router;