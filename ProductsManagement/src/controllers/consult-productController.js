import productModel from "#Schemas/inv-manage/product-schema.js"

const consultProductController = async( req, res ) => {

   const { id } = req.params

   if(!id) return res.status(401).send(`id ${id} not valide`)

   const existingProduct = await productModel.findById(id)
   if(!existingProduct) return res.status(401).send(`Product with id: ${id} not fund`)


   return res.status(200).send({
      name: existingProduct.name,
      quantity: existingProduct.quantity,
      price: existingProduct.price
   })
}

export default consultProductController