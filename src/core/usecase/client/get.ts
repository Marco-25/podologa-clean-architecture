import { ClientEntity } from "../../entity/client"
import { IGetClientRepository } from "../../repository/client"

export class GetClientUsecase {

    constructor(private readonly getRepository: IGetClientRepository) {
        this.getRepository = getRepository
    }

    async execute(): Promise<ClientEntity[]> {
        return await this.getRepository.get()
    }
}