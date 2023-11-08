import productsRoute from "#Routes/inv-manage/products.routes.js"
import UserRoute from "#Routes/us-manage/users.routes.js"
import express, { json } from "express"

const expressApp = express()

//middlewares
expressApp.use(express.json())

//Routes
expressApp.use( '/users', UserRoute )
expressApp.use('/products', productsRoute)

export default expressApp