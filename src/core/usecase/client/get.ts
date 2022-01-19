import { ClientEntity } from "../../entity/client"
import { IClientRepository } from "../../repository/client"

export class GetClientUsecase
{
    constructor(private readonly ClientRepository: IClientRepository) {
        this.ClientRepository = ClientRepository
    }

    async execute(): Promise<ClientEntity[]> {
        return await this.ClientRepository.get()
    }
}