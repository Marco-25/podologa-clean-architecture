import { InvalidParamError } from "../../../helper/errors"
import { MissingParamError } from "../../../helper/errors/missing-param-error"
import { badRequest } from "../../../helper/errors/http-errors"
import { IClientRepository} from "../../repository/client"
import { created } from "../../../helper/http-response"
import { IHttpResponse } from "../../../adapter/http-adapter/http-adapter"

interface IRequest {
    name: string
    email:string
    birthDate: string
}

export class CreateClientUsecase
{
    constructor(private readonly ClientRepository: IClientRepository,) {
        this.ClientRepository = ClientRepository
    }

   async execute(request: IRequest): Promise<IHttpResponse> {
        try {
            const requiredFields = ['name','email','birthDate']
            
            for (let field of requiredFields) {
                if (!request[field]) {
                    return badRequest(new MissingParamError(field))
                }
            }

            const existEmail = await this.ClientRepository.getByEmail({email: request.email})
            if (existEmail) {
                return badRequest(new InvalidParamError('email already exists'))
            }
                     
            await this.ClientRepository.save({
                name: request.name,
                email: request.email,
                birthDate: request.birthDate})
             
            return created(`Client created with success.`)
        } catch (error) {
            return error
        }
 }
}