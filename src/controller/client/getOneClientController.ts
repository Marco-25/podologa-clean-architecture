import ClientAdapter from "../../adapter/models/client/clientAdapter";
import { GetOneClientUsecase } from "../../core/usecase/client"
import ClientRepositorySQL from "../../infra/database/pg-promise/repository/clientRepository";


export default class GetOneClientController {

    static async getOneClient(params, body) {
        const repository = new ClientRepositorySQL();
        const client = new GetOneClientUsecase(repository)
        const result = await client.execute({ id: Number(params.id )})
        return ClientAdapter.adapterResponseClient(result.body)
       
    }
}