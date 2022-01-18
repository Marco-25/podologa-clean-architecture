import { ClientEntity } from "../../../src/core/entity/client"
import { IGetOneClientRepository } from "../../../src/core/repository/client"
import { GetOneClientUsecase } from "../../../src/core/usecase/client"
import ClientRepositoryMemory from "../../mock-repository/client/clientRepositotyMemory"

const fakeCategory = (): ClientEntity => ({id: 1, name: "marco", email: "email@mail.com", bithDate: "03/10/1991"})

interface sutTypes {
  sut: GetOneClientUsecase
  repository: IGetOneClientRepository
}
const makeSut = (): sutTypes => {
  const repository = new ClientRepositoryMemory()
  const sut = new GetOneClientUsecase(repository)
  return {
    sut,
    repository
  }
}

describe('Client', () => {
  test('Should be return categories', async () => {
    const { sut } = makeSut()
    const result = await sut.execute({id: 1})
    expect(result).toEqual(fakeCategory())
  })

  test('Should be return throw error', async () => {
    const { sut, repository } = makeSut()
    jest.spyOn(repository, 'getOne').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const promise = sut.execute({id: 1})
    await expect(promise).rejects.toThrow()
  })
})
