import { ClientEntity } from "../../entity/client";
import { ICreate, IGet, IGetEmail, IUpdate } from "./i_model_data";


export interface IClientRepository {
    get: () => Promise<ClientEntity[]>
    getByEmail: (data: IGetEmail) => Promise<ClientEntity>
    getOne: (data: IGet) => Promise<ClientEntity>
    save: (data: ICreate) => Promise<void>
    update: (data: IUpdate) => Promise<void>
    delete: (data: IGet) => Promise<void>
}