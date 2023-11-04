import { Type } from "@sinclair/typebox";
import Ajv from "ajv";
import addFormats from "ajv-formats"
import addErrors from "ajv-errors"
import { _idDTOschema } from "#Dto/dto-types.js";

const userProfileSchema = Type.Object({
    _id: _idDTOschema //TODO esto va en el Header
})

const ajv = new Ajv({ allErrors: true })
    .addKeyword('kind')
    .addKeyword('modifier')

addFormats(ajv, ['uuid']);
addErrors(ajv)

const validateSchema = ajv.compile( userProfileSchema )

const userProfileDTO =  (req, res, next) => {
    const isDTOValid = validateSchema( req.body )
    if( !isDTOValid )
        return res.status(400).send( ajv.errorsText( validateSchema.errors , {separator: '\n'} ))

    next()
}

export default userProfileDTO