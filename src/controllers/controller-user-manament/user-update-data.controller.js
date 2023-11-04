import UserModel from "#Schemas/user.schema.js"

const userUpdateDataController = async( req, res ) => {

    const { id } = req
    const { newName, newSurname } = req.body
    const existingUserById = await UserModel.findById(id).exec();
    if( !existingUserById )
    return res.send(401).send({errors: ['Credenciales incorrectas']})

    existingUserById.name = newName
    existingUserById.surname = newSurname
    
    await existingUserById.save()

    return res.status(200).send()
}
export default userUpdateDataController