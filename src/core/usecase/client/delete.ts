import { IHttpResponse } from "../../../adapter/http-adapter/http-adapter"
import { InvalidParamError, MissingParamError } from "../../../helper/errors"
import { badRequest } from "../../../helper/errors/http-errors"
import { ok } from "../../../helper/http-response"
import { IClientRepository } from "../../repository/client"

interface IRequest {
    id: number
}

export class DeleteClientUsecase
{
    constructor(private readonly ClientRepository: IClientRepository) {
        this.ClientRepository = ClientRepository
    }

   async execute(request: IRequest): Promise<IHttpResponse> {
       try {
            if (!request.id) {
                return badRequest(new MissingParamError('id'))
            }
            const idExists = await this.ClientRepository.getOne({id: request.id})
            if (!idExists) {
                return badRequest(new InvalidParamError(`ID[${request.id}] not found!`))
            }
            await this.ClientRepository.delete({id: request.id})
            return ok(`Deleted id ${request.id} with success.`)
       } catch (error) {
            return error
       }
    }
}