import { IClientRepository } from "../../repository/client"

interface IRequest {
    id: number
}

export class DeleteClientUsecase
{
    constructor(private readonly ClientRepository: IClientRepository) {
        this.ClientRepository = ClientRepository
    }

   async execute(request: IRequest): Promise<object> {
        await this.ClientRepository.delete({id: request.id})
        return {"message": `Deleted id ${request.id} with success.`}
    }
}