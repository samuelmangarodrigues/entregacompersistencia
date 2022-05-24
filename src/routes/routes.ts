import { Router } from "express";


const routes=Router()


import userCreateController from "../controllers/userCreate.Controller";
import userDeleteSelfController from "../controllers/userDelete.Controller";
import userGetController from "../controllers/userGet.Controller";
import userGetOneController from "../controllers/userGetOne.Controller";
import userUpdateController from "../controllers/userUpdate.Controller";
import verifyEmailMiddleware from "../middlewares/verifyEmailExist.middleware"
import verifyIdMiddleware from "../middlewares/verifyId.middleware"

routes.post("/users",verifyEmailMiddleware,userCreateController)
routes.get("/users",userGetController)
routes.get("/users/:id",userGetOneController)
routes.delete("/users/:id",userDeleteSelfController)
routes.patch("/users/:id",verifyIdMiddleware,userUpdateController)



export default routes

