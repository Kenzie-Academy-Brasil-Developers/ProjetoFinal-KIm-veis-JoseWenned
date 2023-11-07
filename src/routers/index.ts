import { Router } from "express"
import { usersRouter } from "./users.router";
import { loginRouter } from "./login.router";
import { categoriesRouter } from "./categories.router";
import { realEstatesRouter } from "./realEstates.router";
import { schedulesRouter } from "./schedules.router";

export const routes : Router = Router();

routes.use("/users", usersRouter);
routes.use("/login", loginRouter);
routes.use("/categories", categoriesRouter);
routes.use("/realEstate", realEstatesRouter);
routes.use("/schedules", schedulesRouter);