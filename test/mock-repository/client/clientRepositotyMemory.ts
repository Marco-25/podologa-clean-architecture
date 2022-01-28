import { ClientEntity } from "../../../src/core/entity/client";
import { IClientRepository } from "../../../src/core/repository/client"
import { ICreate, IGet, IGetEmail, IUpdate } from "../../../src/core/repository/client/i_model_data";

export default class ClientRepositoryMemory implements IClientRepository
{
    clients: ClientEntity[] = [
        {id: 1, name: "marco", email: "email@mail.com", bithDate: "03/10/1991"},
        {id: 2, name: "Antonio", email: "email2@mail.com", bithDate: "03/10/1998"}
    ]
    
    async save (data: ICreate): Promise<void> {
        try {
            this.clients.push({id: 3,name: data.name, email: data.email, bithDate: data.birthDate})
        } catch (error) {
            throw new Error()
        }
    }

    async getOne (data: IGet): Promise<ClientEntity> {
        try {
            return this.clients.find(client => client.id == data.id)
        } catch (error) {
            throw new Error()
        }
    }

    async get (): Promise<ClientEntity[]> {
        try {
            return this.clients
        } catch (error) {
            throw new Error()
        }
    }

    async getByEmail (data: IGetEmail): Promise<ClientEntity> {
        try {
            return this.clients.filter(client => client.email.includes(String(data.email)))[0]
        } catch (error) {
            throw new Error()
        }
    }

    update (data: IUpdate): Promise<void> {
        try {
            const clientIndex = this.clients.findIndex(client => client.id === data.id)

            if(clientIndex === -1) {
                return 
            }
    
            const client: ClientEntity = Object.assign({
                name: data.name,
                birthDate: data.birthDate
            })
    
            this.clients[clientIndex] = client
        } catch (error) {
            throw new Error()
        }

    }


    async delete (data: IGet): Promise<void> {
        try {
            const clientIndex = this.clients.findIndex(client => client.id === data.id)
            this.clients.splice(this.clients[clientIndex].id, 1)
        } catch (error) {
            throw new Error()
        }
    }
}

