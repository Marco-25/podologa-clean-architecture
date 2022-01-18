import { ClientEntity } from "../../entity/client";


export interface IGetClientRepository {
    get: () => Promise<ClientEntity[]>
}

export interface IGetOneClientRepository {
    getOne: (data: IGet) => Promise<ClientEntity>
}

export interface ISaveClientRepository {
    save: (data: ICreate) => Promise<void>
}

export interface IUpdateClientRepository {
    update: (data: IUpdate) => Promise<void>
}

export interface IDeleteClientRepository {
    delete: (data: IGet) => Promise<void>
}