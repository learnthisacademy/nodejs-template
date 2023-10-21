import UserModel from "#Schemas/user.schema.js"
import { hash } from "bcrypt"

const userRegisterController = async( req, res ) => {

    const { _id, name, surname, email, password } = req.body

    const existingUserById = await UserModel.findById( _id ).exec()
    if( existingUserById ) return res.status(409).send('ya existe un usuario con ese id registrado')

    const existingUserByEmail = await UserModel.findOne({ email }).exec()
    if( existingUserByEmail ) return res.status(409).send('ya existe un usuario con ese Email registrado')

    const hashedPassword = await hash(password, 10)
    
    const user = new UserModel({
        _id,
        name,
        surname,
        email,
        password: hashedPassword
    })
    
    await user.save()

    return res.status(201).send('usuario registrado con exito')
}
export default userRegisterController