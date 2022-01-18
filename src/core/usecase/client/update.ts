import { IUpdateClientRepository } from "../../repository/client"

interface IRequest {
    id: number
    name: string
}

export class UpdateClientUsecase {
    constructor(private readonly createCtaegoryRepository: IUpdateClientRepository) {
        this.createCtaegoryRepository = createCtaegoryRepository
    }

   async execute(request: IRequest): Promise<void> {
        await this.createCtaegoryRepository.update({
            id: request.id,
            name: request.name})
    }
}