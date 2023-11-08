import { Type } from "@sinclair/typebox";
import { nameDTO } from "#Dto/inv-manage/dto-types.js";
import Ajv from "ajv";
import ajvErrors from "ajv-errors";

const consultProductSchema = Type.Object({
   name: nameDTO
}, {
   additionalProperties: false
})

const ajv = new Ajv({ allErrors:true }).addKeyword('kind').addKeyword('modifier')

ajvErrors(ajv)

const validateSchema = ajv.compile( consultProductSchema )

const consultProductDTO = ( req, res, next ) => {
   const isDTOValid = validateSchema( req.body )
   if( !isDTOValid )
       return res.status(400).send( ajv.errorsText( validateSchema.errors, { separator: '\n' } ) )
   next()
}

export default consultProductDTO