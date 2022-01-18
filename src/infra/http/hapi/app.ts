import Hapi from "@hapi/hapi";
import HapiAdapter from "../../../adapter/hapi/HapiAdapter";
import createClientController from "../../../controller/client/createClientController";
import GetClientController from "../../../controller/client/getClientController";


const server = Hapi.server({
    port: 3000,
    host: "localhost"
});

server.route({
    method: "GET",
    path: "/client",
    handler: HapiAdapter.create(GetClientController.getClient)
});

server.route({
    method: "POST",
    path: "/client",
    handler: HapiAdapter.create(createClientController.createClient)
});

server.start();