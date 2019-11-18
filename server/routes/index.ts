import userHandler from "../handlers/user";
import { Router } from "express";

const router = Router();

router.get("/user/:id", userHandler.getUserById);
router.post("/user", userHandler.insertUser);
router.put("/user", userHandler.updateUser);
router.delete("/user/:id", userHandler.deleteUserById);

export default router;
