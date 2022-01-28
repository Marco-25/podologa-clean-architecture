import { IHttpResponse } from "../../../adapter/http-adapter/http-adapter"
import { ok } from "../../../helper/http-response"
import { ClientEntity } from "../../entity/client"
import { IClientRepository } from "../../repository/client"

export class GetClientUsecase
{
    constructor(private readonly ClientRepository: IClientRepository) {
        this.ClientRepository = ClientRepository
    }

    async execute(): Promise<IHttpResponse> {
        const data = await this.ClientRepository.get()
        return ok(data)
    }
}