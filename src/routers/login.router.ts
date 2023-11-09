import { Router } from "express";
import { LoginController } from "../controllers/login.controller";
import { verifyUserExists } from "../middlewares/users.middlewares";
import { verifyBody } from "../middlewares/globals.middlewares";
import { userLoginSchema } from "../schemas/users.schema";

export const loginRouter: Router = Router()

loginRouter.post("/", verifyBody(userLoginSchema), LoginController);
