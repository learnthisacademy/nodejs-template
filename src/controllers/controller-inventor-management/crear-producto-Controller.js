import productModel from "../Schemas/product-schema"

const crearProductoController = async( req, res ) => {

   const { name, price, quantity } = req.body

   const producto = new productModel({
      name: name,
      quantityInventor: quantity,
      price: price,
   })

   await producto.save()

   return res.status(201).send('Created Product ')

}

export default crearProductoController