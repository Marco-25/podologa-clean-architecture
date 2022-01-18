import Express from "express";
import client from './routeClient'

const app = Express();
app.use(Express.json())
app.use(client)



app.listen(3000, () => console.log(`Server is running on port http://localhost:3000`));