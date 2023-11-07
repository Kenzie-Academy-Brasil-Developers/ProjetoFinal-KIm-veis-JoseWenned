import { Router } from "express";
import { LoginController } from "../controllers/login.controller";

export const loginRouter: Router = Router()

loginRouter.post("/", LoginController);
