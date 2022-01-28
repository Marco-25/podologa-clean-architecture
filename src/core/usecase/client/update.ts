import { IHttpResponse } from "../../../adapter/http-adapter/http-adapter"
import { MissingParamError } from "../../../helper/errors"
import { badRequest } from "../../../helper/errors/http-errors"
import { ok } from "../../../helper/http-response"
import { IClientRepository } from "../../repository/client"

interface IRequest {
    id: number
    name: string
    birthDate: string
}

export class UpdateClientUsecase
{
    constructor(private readonly ClientRepository: IClientRepository) {
        this.ClientRepository = ClientRepository
    }

   async execute(request: IRequest): Promise<IHttpResponse> {
     try {
         const requiredFields = ['id','name','birthDate']
         for (let field of requiredFields) {
             if (!request[field]) {
                 return badRequest(new MissingParamError(field))
             }
         }

         await this.ClientRepository.update({
            id: request.id,
            name: request.name,
            birthDate: request.birthDate
        })
        return ok('success')
     } catch (error) {
         return error
     }
    }
}