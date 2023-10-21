import UserModel from "#Schemas/user.schema.js"
import bcrypt from "bcrypt"

const userUpdateEmailController = async( req, res ) => {

    const { id } = req
    const { password, newEmail } = req.body
    const existingUserById = await UserModel.findById(id).exec();
    if( !existingUserById )
    return res.send(401).send('Credenciales incorrectas')
 
    const hash = existingUserById.password
    const checkPassword = await bcrypt.compare( password, hash)
    if( !checkPassword )
        return res.send(401)

    existingUserById.email = newEmail
    
    await existingUserById.save()

    return res.send()
}

export default userUpdateEmailController