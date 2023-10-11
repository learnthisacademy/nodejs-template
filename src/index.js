import httpServer from "#Config/http.js"
import '#Config/env.js'
import connectDB from "#Config/db.js"



const bootstrap = async() => {

    await connectDB(process.env.MONGODB_URL)

    httpServer.listen( process.env.PORT, () => {
        console.log( `servidor escuchando en puerto ${process.env.PORT}` )
    })

}

bootstrap()
