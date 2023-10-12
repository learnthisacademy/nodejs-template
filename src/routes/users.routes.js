
import { Router } from "express";
import userRegisterDto from "#Dto/user-register.dto.js";


export const UserRouter = Router()

UserRouter.post('/register', userRegisterDto(), ( req, res ) => {
    return res.send()
})
UserRouter.post('/login')
UserRouter.get('/profile')
UserRouter.patch('/update-data')
UserRouter.patch('/update-email')
UserRouter.patch('/update-password')
UserRouter.delete('/unregister')