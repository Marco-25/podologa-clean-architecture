import { IClientRepository} from "../../repository/client"

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

   async execute(request: IRequest): Promise<object | Error> {
        try {
            const existEmail = await this.ClientRepository.getByEmail({email: request.email})
            if (existEmail) {
                throw new Error("email already exists")
            }            
            await this.ClientRepository.save({
                name: request.name,
                email: request.email,
                birthDate: request.birthDate})   
            return {message: `Client created with success.`}
        } catch (error) {
            return { message: error.message }
        }
 }
}