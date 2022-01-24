import { Router } from "express"
import { authentication } from "../middleware"
import ExpressAdapter from "../../../../adapter/express/ExpressAdapter";
import createClientController from "../../../../controller/client/createClientController";
import DeleteClientController from "../../../../controller/client/deleteController";
import GetClientController from "../../../../controller/client/getClientController";
import GetOneClientController from "../../../../controller/client/getOneClientController";
import UpdateClientController from "../../../../controller/client/updateController";

const router = Router();

router.post("/client/create",authentication, ExpressAdapter.create(createClientController.createClient, 201));
router.get("/client/show",authentication, ExpressAdapter.create(GetClientController.getClient));
router.get("/client/:id",authentication, ExpressAdapter.create(GetOneClientController.getOneClient));
router.put("/client/update",authentication, ExpressAdapter.create(UpdateClientController.updateClient));
router.delete("/client/delete/:id",authentication, ExpressAdapter.create(DeleteClientController.deleteClient));

export default router