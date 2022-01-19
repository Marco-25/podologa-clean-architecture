import { ClientEntity } from "../../entity/client"
import { IClientRepository } from "../../repository/client"

interface IRequest {
    id: number
}

export class GetOneClientUsecase
{
    constructor(private readonly ClientRepository: IClientRepository) {
        this.ClientRepository = ClientRepository
    }

    async execute(request: IRequest): Promise<ClientEntity> {
        return await this.ClientRepository.getOne({id: request.id})
    }
}
