import { ClientEntity } from "../../../core/entity/client";
import { IHttpResponse } from "../../http-adapter/http-adapter";

export default class ClientAdapter {

    static adapterResponseClient(data: ClientEntity): IHttpResponse {
        return {
            statusCode: 200,
            body: {
                name: data.name,
                email: data.email
            }
        }
    }
}