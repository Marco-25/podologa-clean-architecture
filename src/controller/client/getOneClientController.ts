import { GetOneClientUsecase } from "../../core/usecase/client"
import ClientRepositorySQL from "../../infra/repository/clientRepository";


export default class GetOneClientController {

    static async getOneClient(params, body) {
        const repository = new ClientRepositorySQL();
        const client = new GetOneClientUsecase(repository)

        return await client.execute({ id: params.id })
       
    }
}