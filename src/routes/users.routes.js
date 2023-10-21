export const UserRouter = Router()

import { Router } from "express";
import userJWTDTO from "#Dto/user-jwt.dto.js";
import userRegisterDTO from "#Dto/user-register.dto.js";
import userLoginDTO from "#Dto/user-login.dto.js";
import userUpdateDataDTO from "#Dto/user-update-data.dto.js";
import userUpdateEmailDTO from "#Dto/user-update-email.dto.js";
import userUpdatePasswordDTO from "#Dto/user-update-password.dto.js";
import userDeleteAccountDTO from "#Dto/user-unregister-account.dto.js";

import userRegisterController from "#Controllers/user-register.controller.js";
import userLoginController from "#Controllers/user-login.controller.js";
import userUpdateDataController from "#Controllers/user-update-data.controller.js";
import userProfileController from "#Controllers/user-profile.controller.js";
import userUpdatePasswordController from "#Controllers/user-update-password.controller.js";
import userUpdateEmailController from "#Controllers/user-update-email.controller.js";
import userUnregisterController from "#Controllers/user-unregister.controller.js";


UserRouter.post('/register', userRegisterDTO, userRegisterController)
UserRouter.post('/login', userLoginDTO, userLoginController)
UserRouter.get('/profile', userJWTDTO, userProfileController)
UserRouter.patch('/update-data', userJWTDTO, userUpdateDataDTO, userUpdateDataController)
UserRouter.patch('/update-email', userJWTDTO, userUpdateEmailDTO,)
UserRouter.patch('/update-password', userJWTDTO, userUpdatePasswordDTO, userUpdatePasswordController )
UserRouter.patch('/update-email', userJWTDTO, userUpdateEmailDTO, userUpdateEmailController )
UserRouter.delete('/unregister', userJWTDTO, userDeleteAccountDTO, userUnregisterController)