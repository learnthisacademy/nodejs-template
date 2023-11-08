
import { Router } from "express";
import userJWTDTO from "#Dto/us-manage/user-jwt.dto.js";
import userRegisterDTO from "#Dto/us-manage/user-register.dto.js";
import userLoginDTO from "#Dto/us-manage/user-login.dto.js";
import userUpdateDataDTO from "#Dto/us-manage/user-update-data.dto.js";
import userUpdateEmailDTO from "#Dto/us-manage/user-update-email.dto.js";
import userUpdatePasswordDTO from "#Dto/us-manage/user-update-password.dto.js";
import userDeleteAccountDTO from "#Dto/us-manage/user-unregister-account.dto.js";


const UserRoute = Router()
import userRegisterController from "#Controllers/us-manage/user-register.controller.js";
import userLoginController from "#Controllers/us-manage/user-login.controller.js";
import userUpdateDataController from "#Controllers/us-manage/user-update-data.controller.js";
import userProfileController from "#Controllers/us-manage/user-profile.controller.js";
import userUpdatePasswordController from "#Controllers/us-manage/user-update-password.controller.js";
import userUpdateEmailController from "#Controllers/us-manage/user-update-email.controller.js";
import userUnregisterController from "#Controllers/us-manage/user-unregister.controller.js";


UserRoute.post('/register', userRegisterDTO, userRegisterController)
UserRoute.post('/login', userLoginDTO, userLoginController)
UserRoute.get('/profile', userJWTDTO, userProfileController)
UserRoute.patch('/update-data', userJWTDTO, userUpdateDataDTO, userUpdateDataController)
UserRoute.patch('/update-email', userJWTDTO, userUpdateEmailDTO,)
UserRoute.patch('/update-password', userJWTDTO, userUpdatePasswordDTO, userUpdatePasswordController )
UserRoute.patch('/update-email', userJWTDTO, userUpdateEmailDTO, userUpdateEmailController )
UserRoute.delete('/unregister', userJWTDTO, userDeleteAccountDTO, userUnregisterController)

export default UserRoute