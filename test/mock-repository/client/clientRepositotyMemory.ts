import { ClientEntity } from "../../../src/core/entity/client";
import { IDeleteClientRepository, IGetClientRepository, IGetOneClientRepository, ISaveClientRepository } from "../../../src/core/repository/client"

export default class ClientRepositoryMemory implements IGetClientRepository, IGetOneClientRepository, ISaveClientRepository, IDeleteClientRepository
{
    clients = [
        {id: 1, name: "marco", email: "email@mail.com", bithDate: "03/10/1991"},
        {id: 2, name: "Antonio", email: "email@mail.com", bithDate: "03/10/1998"}
    ]
    
    async save (data: ICreate): Promise<void> {
        this.clients.push({id: 3,name: data.name, email: data.email, bithDate: data.bithDate})
    }

    async getOne (data: IGet): Promise<ClientEntity> {
        return this.clients.find(client => client.id == data.id);
    }

    async get (): Promise<ClientEntity[]> {
        return this.clients
    }

    async delete (data: IGet): Promise<void> {
        this.clients.pop()
    }
}