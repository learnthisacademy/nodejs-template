import { Type } from "@sinclair/typebox";

export const nameDTO = Type.Object({
   type: Type.String(),
   errorMessages: Type.Object({
      type: "Name property type is a String"
   })
})

export const quantityInventorDTO = Type.Object({
   type: Type.Number(),
   errorMessages: Type.Object({
      type: "QuantityInventor property type is a Number"
   })
})

export const priceDTO = Type.Object({
   type: Type.Number(),
   errorMessages: Type.Object({
      type: "Price property type is a Number"
   })
})