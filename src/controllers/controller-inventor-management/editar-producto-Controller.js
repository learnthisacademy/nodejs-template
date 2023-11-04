import productModel from "../Schemas/product-schema"

const editarProductoController = async( req, res ) => {

   const { id } = req.params
   const { name, price, quantity } = req.body

   if(!id) return res.status(401).send(`id ${id} not valide`)
   if(!name || !price || !quantity) return res.status(401).send('All fields are required')

   const existingProduct = await productModel.findById(id)
   if(!existingProduct) return res.status(401).send(`Product with id: ${id} not fund`)

   await existingProduct.updateOne( id ,{
      name: name,
      quantityInventor: quantity,
      price: price
   })

   await producto.save()

   return res.status(200).send('Edited Product')

}

export default editarProductoController