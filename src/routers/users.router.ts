import { Router } from "express";
import { verifyAdmin, verifyBody, verifyPermissions, verifyToken } from "../middlewares/global.middlewares";
import { verifyUniqueUserEmail, verifyUserExists } from "../middlewares/users.middlewares";

export const usersRouter: Router = Router()

usersRouter.post("/", verifyBody, verifyUniqueUserEmail);
usersRouter.get("/", verifyToken, verifyAdmin);
usersRouter.patch("/:id", 

    verifyBody, 
    verifyToken, 
    verifyUserExists, 
    verifyPermissions

);
usersRouter.delete("/:id", 

    verifyToken, 
    verifyUserExists, 
    verifyPermissions
    
);
