import { CreateClientUsecase } from "../../core/usecase/client";
import ClientRepositorySQL from "../../infra/repository/clientRepository";

export default class createClientController {

    static async createClient(params, body) {
        const repository = new ClientRepositorySQL();
        const create = new CreateClientUsecase(repository)
        return await create.execute({name: body.name, email: body.email, birthDate: body.birthDate})
    }
}