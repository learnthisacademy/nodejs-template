import { Type } from "@sinclair/typebox";
import Ajv from "ajv";
import ajvErrors from "ajv-errors";
import { nameDTO, priceDTO, quantityInventorDTO } from "../dto-types";

const crearProductoSchema = Type.Object({
   nombre: nameDTO,
   quantity: quantityInventorDTO,
   price: priceDTO
})

const ajv = new Ajv({allErrors:true})
.addKeyword('kind')
.addKeyword('modifier')

ajvErrors(ajv)

const validateSchema = ajv.compile( crearProductoSchema )

const crearProductoDTO = ( req, res, next ) => {

   const isDTOValid = validateSchema( req.body )

   if( !isDTOValid )
      return res.status(400).send( ajv.errorsText( validateSchema.errors, {separator: '\n'} ) )

   next()
}

export default crearProductoDTO