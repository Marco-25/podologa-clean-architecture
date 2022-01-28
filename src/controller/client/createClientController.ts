import { CreateClientUsecase } from "../../core/usecase/client";
import ClientRepositorySQL from "../../infra/database/pg-promise/repository/clientRepository";

export default class createClientController {

    static async createClient(params, body) {
        const repository = new ClientRepositorySQL();
        const create = new CreateClientUsecase(repository)
        const data = await create.execute({name: body.name, email: body.email, birthDate: body.birthDate})
        return data
    }
}