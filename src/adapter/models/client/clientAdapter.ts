import { ClientEntity } from "../../../core/entity/client";

interface IResponse {
    name: string
    email: string
}

export default class ClientAdapter {

    static adapterResponseClient(data: ClientEntity): IResponse {
        return {
            name: data.name,
            email: data.email
        }
    }
}