import { UpdateClientUsecase } from "../../core/usecase/client";
import ClientRepositorySQL from "../../infra/database/pg-promise/repository/clientRepository";


export default class UpdateClientController {

    static async updateClient(params, body) {
        const repository = new ClientRepositorySQL();
        const client = new UpdateClientUsecase(repository)        
        const result = await client.execute({ id: body.id, name: body.name, birthDate: body.birthDate })
        return result
       
    }
}