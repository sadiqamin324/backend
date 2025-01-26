import { Router } from "express";
import { registerUser,loginUser,logoutUser } from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { refreshAcessToken } from "../controllers/user.controller.js";
const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        }, 
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    (registerUser
    )) // POST /register
    router.route("/login").post(loginUser)
    router.route("/refresh_token").post(refreshAcessToken)
//secured routes
router.route("/logout").post(verifyJWT, logoutUser) 
export default router;
