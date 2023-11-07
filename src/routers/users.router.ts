import { Router } from "express";
import { verifyAdmin, verifyBody, verifyPermissions, verifyToken } from "../middlewares/globals.middlewares";
import { verifyUniqueUserEmail, verifyUserExists } from "../middlewares/users.middlewares";
import { createUserController, deleteUserController, realAllUserController, updateController } from "../controllers/users.controller";
import { createUserSchema, updateUserSchema } from "../schemas/users.schema";

export const usersRouter: Router = Router()

usersRouter.post("/", verifyBody(createUserSchema), verifyUniqueUserEmail, createUserController);
usersRouter.get("/", verifyToken, verifyAdmin, realAllUserController);
usersRouter.patch("/:id", 

    verifyBody(updateUserSchema), 
    verifyToken, 
    verifyUserExists, 
    verifyPermissions,
    updateController

);
usersRouter.delete("/:id", 

    verifyToken, 
    verifyUserExists, 
    verifyPermissions,
    deleteUserController
    
);
