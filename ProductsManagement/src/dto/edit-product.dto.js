import { Type } from "@sinclair/typebox";
import { nameDTO, priceDTO, quantityInventorDTO } from "#Dto/inv-manage/dto-types.js";
import Ajv from "ajv";
import ajvErrors from "ajv-errors";

const editProductSchema = Type.Object({
   name: nameDTO,
   quantity: quantityInventorDTO,
   price: priceDTO,
}, {
   additionalProperties: false
})

const ajv = new Ajv({allErrors: true}).addKeyword("kind").addKeyword("modifier")

ajvErrors(ajv)

const validateSchema = ajv.compile( editProductSchema )

const editProductDTO = ( req, res, next ) => {

   const isDTOValid = validateSchema( req.body )
   if( !isDTOValid ) 
      return res.status(400).send( ajv.errorsText( validateSchema.errors, {separator: '\n'} ) )

   next()
}

export default editProductDTO