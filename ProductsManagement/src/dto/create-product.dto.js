import { Type } from "@sinclair/typebox";
import Ajv from "ajv";
import addErrors from "ajv-errors"
import { nameDTO, priceDTO, quantityInventorDTO } from "#Dto/inv-manage/dto-types.js";

const createProductSchema = Type.Object({
   nombre: nameDTO,
   price: priceDTO,
   quantity: quantityInventorDTO
}, {
   additionalProperties: false
})

const ajv = new Ajv({ allErrors:true }).addKeyword("kind").addKeyword("modifier")

addErrors(ajv)

const validateSchema = ajv.compile( createProductSchema )

const createProductDTO = ( req, res, next ) => {
   const isDTOValid = validateSchema( req.body )
   if( !isDTOValid )
       return res.status(400).send( ajv.errorsText( validateSchema.errors, { separator: '\n' } ) )
   next()
}

export default createProductDTO