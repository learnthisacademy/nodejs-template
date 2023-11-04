import UserModel from "#Schemas/user.schema.js"
import bcrypt from "bcrypt"

const userUpdatePasswordController = async( req, res ) => {

    const { id } = req
    const { password, newPlainPassword } = req.body
    const existingUserById = await UserModel.findById(id).exec();
    if( !existingUserById )
        return res.status(401).send({errors: ['Credenciales incorrectas']})

    const hash = existingUserById.password
    const checkPassword = await bcrypt.compare( password, hash)
    if( !checkPassword )
        return res.status(401).send({errors: ['Credenciales incorrectas']})

    const newHash = await bcrypt.hash( newPlainPassword, hash )
    existingUserById.password = newHash
    
    await existingUserById.save()

    return res.send()
}

export default userUpdatePasswordController