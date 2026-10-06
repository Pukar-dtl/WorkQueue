import { Router } from "express";
import { signUp } from "../controller/loginController.js";

const router = Router();

router.post('/register', signUp);

export default router;