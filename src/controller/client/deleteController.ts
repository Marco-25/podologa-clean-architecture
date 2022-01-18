import { DeleteClientUsecase } from "../../core/usecase/client/delete";
import ClientRepositorySQL from "../../infra/repository/clientRepository";


export default class DeleteClientController {

    static async deleteClient(params, body) {
        const repository = new ClientRepositorySQL();
        const client = new DeleteClientUsecase(repository)

        return await client.execute({ id: params.id })
       
    }
}