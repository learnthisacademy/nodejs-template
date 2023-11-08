import { Type } from "@sinclair/typebox";
import Ajv from 'ajv';
import addFormats from "ajv-formats"
import addErrors from "ajv-errors"
import { _idDTOschema, emailDTOschema, nameDTOschema, passwordDTOschema, surnameDTOschema } from "#Dto/us-manage/dto-types.js";

const RegisterDTOschema = Type.Object({
    name: nameDTOschema,
    surname: surnameDTOschema,
    email: emailDTOschema,
    password: passwordDTOschema
}, {
    additionalProperties: false
})

const ajv = new Ajv({ allErrors: true })

addFormats(ajv, ['email', 'uuid'])
.addKeyword('kind')
.addKeyword('modifier')

addErrors(ajv)

const validateSchema = ajv.compile( RegisterDTOschema )

const userRegisterDTO =  (req, res, next) => {
    const isDTOValid = validateSchema( req.body )
    if( !isDTOValid )
        return res.status(400).send( ajv.errorsText( validateSchema.errors, { separator: '\n' } ) )
    next()
}

export default userRegisterDTO