import { Type } from "@sinclair/typebox";
import { nameDTO, priceDTO, quantityInventorDTO } from "../dto-types";
import Ajv from "ajv";
import ajvErrors from "ajv-errors";

const editarProductoSchema = Type.Object({
   id: idDTO,
   name: nameDTO,
   quantity: quantityInventorDTO,
   price: priceDTO,
})

const ajv = new Ajv({allErrors: true})
.addKeyword('kind')
.addKeyword('modifier')

ajvErrors(ajv)

const validateSchema = ajv.compile( editarProductoSchema )

const editarProductoDTO = ( req, res, next ) => {

   const isDTOValid = validateSchema( req.body )
   if( !isDTOValid ) 
      return res.status(400).send( ajv.errorsText( validateSchema.errors, {separator: '\n'} ) )

   next()
}

export default editarProductoDTO