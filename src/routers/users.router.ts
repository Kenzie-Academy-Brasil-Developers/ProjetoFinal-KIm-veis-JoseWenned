import { Router } from "express";

export const userRouter: Router = Router()

userRouter.post("/");
userRouter.get("/");
userRouter.patch("/:id");
userRouter.delete("/:id");
