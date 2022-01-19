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

   async execute(request: IRequest): Promise<object | Error> {
     try {
         const fields = ['id','name','birthDate']
         
         for (let i = 0; i < fields.length; i++) {
             if (!request[fields[i]] || request[fields[i]] == null ) {
                throw new Error(`${fields[i]} is requerid`)
             }
         }

         await this.ClientRepository.update({
            id: request.id,
            name: request.name,
            birthDate: request.birthDate
        })
        return {"message": "success"}
     } catch (error) {
         return { message: error.message }
     }
    }
}