import { Router } from "express";
import { 
    studentLogin, studentRegister
} from "../controllers/student.controller.js";

const router = Router()

router.post("/studentlogin", studentLogin)
router.post("/studentregister", studentRegister)

export default router