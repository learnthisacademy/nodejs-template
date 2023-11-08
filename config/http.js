import { createServer } from 'http'
import expressApp from '#Config/express.js'

const httpServer = createServer( expressApp )

export default httpServer