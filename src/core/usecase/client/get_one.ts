import { IHttpResponse } from "../../../adapter/http-adapter/http-adapter"
import { MissingParamError } from "../../../helper/errors"
import { badRequest } from "../../../helper/errors/http-errors"
import { ok } from "../../../helper/http-response"
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

    async execute(request: IRequest): Promise<IHttpResponse> {
        try {
            if (!request.id) {
                return badRequest(new MissingParamError('id'))
            }
            const data = await this.ClientRepository.getOne({id: request.id})
            return ok(data)
        } catch (error) {
            return error
        }
    }
}
