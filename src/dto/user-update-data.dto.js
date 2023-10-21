import {nameDTOschema, surnameDTOschema } from "#Lib/dto-types.js";
import { Type } from "@sinclair/typebox";
import Ajv from "ajv";
import addErrors from "ajv-errors"

const userUpdateDataSchema = Type.Object({
    newName: nameDTOschema,
    newSurname: surnameDTOschema,
})

const ajv = new Ajv({ allErrors: true })
    .addKeyword('kind')
    .addKeyword('modifier')

addErrors(ajv)

const validateSchema = ajv.compile( userUpdateDataSchema )

const userUpdateDataDTO = (req, res, next) => {
    const isValidDTO = validateSchema( req.body )
    if( !isValidDTO ) 
        return res.status(400).send( ajv.errorsText( validateSchema.errors , {separator: '\n'} ))

    next()
}

export default userUpdateDataDTO