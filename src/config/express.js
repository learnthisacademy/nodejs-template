import { UserRouter } from "../routes/users.routes.js"
import express, { json } from "express"

const expressApp = express()

//middlewares
expressApp.use( express.json() )


//Routes

expressApp.use( '/users', UserRouter )

export default expressApp