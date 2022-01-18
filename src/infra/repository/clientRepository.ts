import { ClientEntity } from "../../core/entity/client";
import { IDeleteClientRepository, IGetClientRepository, IGetOneClientRepository, ISaveClientRepository, IUpdateClientRepository } from "../../core/repository/client";
import database from "../database/database";


export default class ClientRepositorySQL implements IGetClientRepository, ISaveClientRepository, IGetOneClientRepository,
 IUpdateClientRepository, IDeleteClientRepository
{
    async save(data: ICreate): Promise<ClientEntity> {
        try {
            return await database.none('INSERT INTO client (name, email, birth_date) values ($1, $2, $3)', [data.name, data.email, data.bithDate]);
        } catch (error) {
            return error.message
        }   
    }

    async get (): Promise<ClientEntity[]> {
        try {
            return await database.manyOrNone('SELECT * FROM client')
        } catch (error) {
            return error.message
        }
    }

    async getOne (data: IGet): Promise<ClientEntity> {
        try {
            return await database.oneOrNone('SELECT * FROM client')
        } catch (error) {
            return error.message
        }
    }

    async update (data: IUpdate): Promise<ClientEntity> {
        try {
       return await database.query('UPDATE client SET name = $1 WHERE id = $2',[data.name, data.id])
        } catch (error) {
            return error.message 
        }
    }

    async delete (data: IGet): Promise<void> {
        try {
            await database.any("DELETE FROM client WHERE id = $1", [data.id])
        } catch (error) {
            return error.message 
        }
    }
}