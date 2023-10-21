import UserModel from "#Schemas/user.schema.js"
import bcrypt from "bcrypt"

const userUnregisterController = async( req, res ) => {

    const { id } = req
    const { password } = req.body
    const existingUserById = await UserModel.findById(id).exec();
    if( !existingUserById )
    return res.send(401).send('Credenciales incorrectas')
 
    const hash = existingUserById.password
    const checkPassword = await bcrypt.compare( password, hash)
    if( !checkPassword )
        return res.send(401)
    
    await existingUserById.deleteOne()

    return res.send()
}

export default userUnregisterController