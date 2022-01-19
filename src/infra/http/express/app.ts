import Express from "express";
import client from './client-route/routeClient'

import swaggerUI from 'swagger-ui-express'
import swaggerClient from './client-route/swagger.json'

const cors = require('cors')

const app = Express();
app.use(Express.json())
app.use(cors());

// routes client
app.use("/v1",client)
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerClient))



app.listen(3000, () => console.log(`Server is running on port http://localhost:3000`));