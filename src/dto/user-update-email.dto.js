import { emailDTOschema, passwordDTOschema } from "#Dto/dto-types.js";
import { Type } from "@sinclair/typebox";
import Ajv from "ajv";
import addErrors from "ajv-errors"
import addFormats from "ajv-formats"

const userUpdateEmailSchema = Type.Object({
    password: passwordDTOschema,
    newEmail: emailDTOschema
})

const ajv = new Ajv({ allErrors: true })
    .addKeyword('kind')
    .addKeyword('modifier')

addFormats( ajv, ['email'] )
ajv.addFormat('password', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{10,15}$/)
addErrors(ajv)

const validateSchema = ajv.compile( userUpdateEmailSchema )

const userUpdateEmailDTO =  (req, res, next) => {    
    const isValidDTO = validateSchema( req.body )
    if( !isValidDTO ) 
        return res.status(400).send( ajv.errorsText(validateSchema.errors, {separator: '\n'} ))

    next()
}

export default userUpdateEmailDTO