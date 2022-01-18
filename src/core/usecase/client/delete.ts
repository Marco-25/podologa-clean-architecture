import { IDeleteClientRepository } from "../../repository/client"

interface IRequest {
    id: number
}

export class DeleteClientUsecase {
    constructor(private readonly createCtaegoryRepository: IDeleteClientRepository) {
        this.createCtaegoryRepository = createCtaegoryRepository
    }

   async execute(request: IRequest): Promise<object> {
        await this.createCtaegoryRepository.delete({id: request.id})
        return {"message": `Deleted id ${request.id} with success.`}
    }
}