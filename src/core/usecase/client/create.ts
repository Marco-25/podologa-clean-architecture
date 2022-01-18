import { ClientEntity } from "../../entity/client"
import { ISaveClientRepository } from "../../repository/client"

interface IRequest {
    name: string
    email:string
    birthDate: string
}

export class CreateClientUsecase {
    constructor(private readonly createClientRepository: ISaveClientRepository) {
        this.createClientRepository = createClientRepository
    }

   async execute(request: IRequest): Promise<void> {
        await this.createClientRepository.save({
            name: request.name,
            email: request.email,
            bithDate: request.birthDate})
        return null
 }
}