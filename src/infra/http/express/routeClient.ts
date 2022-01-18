import { Router } from "express"
import ExpressAdapter from "../../../adapter/express/ExpressAdapter";
import createClientController from "../../../controller/client/createClientController";
import DeleteClientController from "../../../controller/client/deleteController";
import GetClientController from "../../../controller/client/getClientController";
import GetOneClientController from "../../../controller/client/getOneClientController";
import UpdateClientController from "../../../controller/client/updateController";

const router = Router();

router.post("/client", ExpressAdapter.create(createClientController.createClient));
router.get("/client", ExpressAdapter.create(GetClientController.getClient));
router.get("/client/:id", ExpressAdapter.create(GetOneClientController.getOneClient));
router.put("/client", ExpressAdapter.create(UpdateClientController.updateClient));
router.delete("/client/:id", ExpressAdapter.create(DeleteClientController.deleteClient));

export default router