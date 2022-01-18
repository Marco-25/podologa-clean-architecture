import { UpdateClientUsecase } from "../../core/usecase/client";
import ClientRepositorySQL from "../../infra/repository/clientRepository";


export default class UpdateClientController {

    static async updateClient(params, body) {
        const repository = new ClientRepositorySQL();
        const client = new UpdateClientUsecase(repository)

        return await client.execute({ id: body.id, name: body.name })
       
    }
}