import { Type } from "@sinclair/typebox";
import { nameDTO } from "../../lib/dto-types";
import Ajv from "ajv";
import ajvErrors from "ajv-errors";

const consultarProductoSchema = Type.Object({
   name: nameDTO
})

const ajv = new Ajv({ allErrors:true })
.addKeyword('kind')
.addKeyword('modifier')

ajvErrors(ajv)

const validateSchema = ajv.compile( consultarProductoSchema )

const consultarProductoDTO = ( req, res, next ) => {

   const isDTOValide = validateSchema( req.body )
   if(!isDTOValide)
      return res.status(400).send( ajv.errorsText( validateSchema.errors, { separator: '\n' } ) ) 

   next()
}

export default consultarProductoDTO