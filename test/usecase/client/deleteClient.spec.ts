import { ClientEntity } from "../../../src/core/entity/client"
import { IClientRepository } from "../../../src/core/repository/client"
import { DeleteClientUsecase } from "../../../src/core/usecase/client/delete"
import ClientRepositoryMemory from "../../mock-repository/client/clientRepositotyMemory"

const fakeCategory = (): ClientEntity => ({id: 1, name: "marco", email: "email@mail.com", bithDate: "03/10/1991"})

interface SutTypes {
  sut: DeleteClientUsecase
  repository: IClientRepository
}

const makeSut = (): SutTypes => {
  const repository = new ClientRepositoryMemory()
  const sut = new DeleteClientUsecase(repository)
  return {
    sut,
    repository
  }
}

describe('Client', () => {
  test('Should be delete one client', async () => {
    const { sut } = makeSut()
    const idFake = 1
    const result = await sut.execute({id: idFake})
    expect(result).toEqual({"message": `Deleted id ${idFake} with success.`})
  })

  test('Should be return throw error', async () => {
    const { sut, repository } = makeSut()
    jest.spyOn(repository, 'delete').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const promise = sut.execute({id: 1})
    await expect(promise).rejects.toThrow()
  })
})
