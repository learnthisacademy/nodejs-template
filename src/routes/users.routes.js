
import { Router } from "express";

const UserRouter = Router()

UserRouter.post('/register', middlewareValidate)
UserRouter.post('/login', middlewareValidate)
UserRouter.get('/profile', middlewareValidate)
UserRouter.patch('/update-data', middlewareValidate)
UserRouter.patch('/update-email', middlewareValidate)
UserRouter.patch('/update-password', middlewareValidate)
UserRouter.delete('/unregister', middlewareValidate)

export default UserRouter