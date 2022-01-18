import { CreateClientUsecase } from "../../core/usecase/client";
import ClientRepositorySQL from "../../infra/repository/clientRepository";

export default class createClientController {

    static async createClient(params, body) {
        const repository = new ClientRepositorySQL();
        const create = new CreateClientUsecase(repository)
        const id = await create.execute(body.name)
        return {message: `Client created with success ID : ${id}`}
    }
}