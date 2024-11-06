import express from "express";
import * as controller from "../app/controller/cnotroller.js";
import * as blogController from "../app/controller/BlogController.js";
import middleware from "../app/middleware/middleware.js";


const router = express.Router();



router.get("/home", controller.test )

router.get("/encodetoken", controller.TokenEn )
router.post("/decodetoken", controller.TokenDe )
router.get("/email", controller.Email )
router.get("/profile", middleware,controller.Profile )
router.get("/cookie", controller.CreateCookies )
router.get("/rmcookie", controller.RemoveCookies )
router.post("/upload", controller.FileUpload )
//assignment API
//Create Route
router.post("/create-blog", blogController.createBlog )
//Read Route
router.get("/read-blog", blogController.readBlog )
//Update Route
router.put("/update-blog", blogController.updateBlog )
//Delete Route
router.delete("/delete-blog", blogController.deleteBlog )

export default router;