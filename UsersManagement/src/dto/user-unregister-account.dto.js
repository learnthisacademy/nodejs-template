import {passwordDTOschema } from "#Dto/us-manage/dto-types.js";
import { Type } from "@sinclair/typebox";
import Ajv from "ajv";
import addErrors from "ajv-errors"

const userDeleteAccountSchema = Type.Object({
    password: passwordDTOschema
}, {
    additionalProperties: false
})

const ajv = new Ajv({ allErrors: true })
    .addKeyword('kind')
    .addKeyword('modifier')

ajv.addFormat("password", /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{10,15}$/)
addErrors(ajv)

const validateSchema = ajv.compile( userDeleteAccountSchema )

const userDeleteAccountDTO =  (req, res, next) => {    
    const isValidDTO = validateSchema( req.body )
    if( !isValidDTO ) 
        return res.status(400).send( ajv.errorsText( validateSchema.errors , {separator: '\n'} ))

    next()
}

export default userDeleteAccountDTO