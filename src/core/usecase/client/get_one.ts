import { ClientEntity } from "../../entity/client"
import { IGetOneClientRepository } from "../../repository/client"

interface IRequest {
    id: number
}

export class GetOneClientUsecase {
    constructor(private readonly getOneRepository: IGetOneClientRepository) {
        this.getOneRepository = getOneRepository
    }

    async execute(request: IRequest): Promise<ClientEntity> {
        return await this.getOneRepository.getOne({id: request.id})
    }
}
