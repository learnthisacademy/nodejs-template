import { Type } from "@sinclair/typebox";


export const idDTO = Type.Object({
   type: Type.String(),
   errorMessages: {
      type: "Id property type is a String"
   }
})

export const nameDTO = Type.Object({
   type: Type.String(),
   errorMessages: {
      type: "Name property type is a String"
   }
})

export const quantityInventorDTO = Type.Object({
   type: Type.Integer(),
   errorMessages: {
      type: "QuantityInventor property type is a Number"
   }
})

export const priceDTO = Type.Object({
   type: Type.String(),
   errorMessages: {
      type: "Price property type is a Number"
   }
})