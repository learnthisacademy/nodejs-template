import userRegisterDTO from "#Dto/user-register.dto.js";
import userRegisterController from "#Controllers/user-register.controller.js";
import userLoginDTO from "#Dto/user-login.dto.js";
import userUpdateEmailDTO from "#Dto/user-update-email.dto.js";
import userJWTDTO from "#Dto/user-jwt.dto.js";
import userLoginController from "#Controllers/user-login.controller.js";
//import userProfileDTO from "#Dto/user-profile.dto.js";
//import userUpdateDataDTO from "#Dto/user-update-data.dto.js";
//import userUpdatePasswordDTO from "#Dto/user-update-password.dto.js";
//import userDeleteAccountDTO from "#Dto/user-unregister-account.dto.js";
import { Router } from "express";

export const UserRouter = Router()

UserRouter.post('/register', userRegisterDTO, userRegisterController)
UserRouter.post('/login', userLoginDTO, userLoginController)
//UserRouter.get('/profile', userJWTDTO, userProfileDTO, ProfileController)
//UserRouter.patch('/update-data', userJWTDTO, userUpdateDataDTO, UpdateDataController)
UserRouter.patch('/update-email', userJWTDTO, userUpdateEmailDTO)
//UserRouter.patch('/update-password', userJWTDTO, userUpdatePasswordDTO, updatePasswordController )
//UserRouter.delete('/unregister', userJWTDTO, userDeleteAccountDTO, deleteAccountController)