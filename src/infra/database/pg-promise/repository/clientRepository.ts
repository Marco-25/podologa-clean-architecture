import { ClientEntity } from "../../../../core/entity/client";
import { IClientRepository } from "../../../../core/repository/client";
import { ICreate, IGet, IGetEmail, IUpdate } from "../../../../core/repository/client/i_model_data";
import database from "../database";


export default class ClientRepositorySQL implements IClientRepository
{
    async getByEmail (data: IGetEmail): Promise<ClientEntity> {
        return await database.oneOrNone('SELECT * FROM client WHERE email = $1', [data.email])
    }

    async save(data: ICreate): Promise<void> {
        try {
            await database.none('INSERT INTO client (name, email, birthDate) VALUES ($1, $2, $3);', [data.name, data.email, data.birthDate]);
        } catch (error) {
            return error.message
        }   
    }

    async get (): Promise<ClientEntity[]> {
        try {
            return await database.manyOrNone('SELECT * FROM client ORDER BY id ASC')
        } catch (error) {
            return error.message
        }
    }

    async getOne (data: IGet): Promise<ClientEntity> {
        try {
            return await database.oneOrNone('SELECT * FROM client WHERE id = $1', [data.id])
        } catch (error) {
            return error.message
        }
    }

    async update (data: IUpdate): Promise<void> {
        try {
            await database.any('UPDATE client SET name = $1, birthDate = $2 WHERE id = $3',[data.name, data.birthDate, data.id])
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