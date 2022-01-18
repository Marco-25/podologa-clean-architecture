import { ISaveClientRepository } from "../../../src/core/repository/client"
import { CreateClientUsecase } from "../../../src/core/usecase/client"
import ClientRepositoryMemory from "../../mock-repository/client/clientRepositotyMemory"


interface sutTypes {
  sut: CreateClientUsecase
  repository: ISaveClientRepository
}
const makeSut = (): sutTypes => {
  const repository = new ClientRepositoryMemory()
  const sut = new CreateClientUsecase(repository)
  return {
    sut,
    repository
  }
}

describe('Client', () => {
  test('Should be return clients', async () => {
    const { sut } = makeSut()
    const result = await sut.execute({name: "Marco", email: "email@mail.com", birthDate: "25/02/2000"})
    expect(result).toBeNull()
  }) 

  test('Should be return throw error', async () => {
    const { sut, repository } = makeSut()
    jest.spyOn(repository, 'save').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const promise = sut.execute({name: "Marco", email: "email@mail.com", birthDate: "25/02/2000"})
    await expect(promise).rejects.toThrow()
  })
})
