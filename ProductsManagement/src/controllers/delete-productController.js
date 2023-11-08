import productModel from "#Schemas/inv-manage/product-schema.js"

const deleteProductController = async( req, res ) => {

const { name } = req.body

const existingProduct = await productModel.find( {name: name} ).exec()
if(!existingProduct) return res.status(401).send(`Product with name ${ name } not fund`)

await existingProduct.deleteOne()
productModel.save()

return res.send()
}

export default deleteProductController