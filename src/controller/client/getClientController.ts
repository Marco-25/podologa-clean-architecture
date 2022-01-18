import { GetClientUsecase } from "../../core/usecase/client"
import ClientRepositorySQL from "../../infra/repository/clientRepository";


export default class GetClientController {

    static async getClient(params, body) {
        const repository = new ClientRepositorySQL();
        const client = new GetClientUsecase(repository)

        return await client.execute();
       
    }
}