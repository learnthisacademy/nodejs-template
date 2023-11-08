import { Type } from "@sinclair/typebox";
import Ajv from "ajv";
import addFormats from "ajv-formats"
import addErrors from "ajv-errors"
import { emailDTOschema, passwordDTOschema } from "#Dto/us-manage/dto-types.js";

const userLoginSchema = Type.Object({
    email: emailDTOschema,
    password: passwordDTOschema
})

const ajv = new Ajv({ allErrors: true })
    .addKeyword('kind')
    .addKeyword('modifier')

addFormats(ajv, ['email']);
ajv.addFormat("password", /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{10,15}$/)
addErrors(ajv)

const validateSchema = ajv.compile( userLoginSchema )

const userLoginDTO =  (req, res, next) => {
    const isDTOValid = validateSchema( req.body )
    if( !isDTOValid )
        return res.status(400).send( ajv.errorsText( validateSchema.errors , {separator: '\n'} ))

    next()
}

export default userLoginDTO