import { ClientEntity } from "../../../src/core/entity/client"
import { IClientRepository } from "../../../src/core/repository/client"
import { GetOneClientUsecase } from "../../../src/core/usecase/client"
import ClientRepositoryMemory from "../../mock-repository/client/clientRepositotyMemory"

const fakeCategory = (): ClientEntity => ({id: 1, name: "marco", email: "email@mail.com", bithDate: "03/10/1991"})

interface sutTypes {
  sut: GetOneClientUsecase
  repository: IClientRepository
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
  test('Should be return one client', async () => {
    const { sut } = makeSut()
    const result = await sut.execute({id: 1})
    expect(result.body).toEqual(fakeCategory())
  })

  test('Should be return throw error', async () => {
    try {
      const { sut, repository } = makeSut()
      jest.spyOn(repository, 'getOne').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
      sut.execute({id: 1})
    } catch (error) {
      expect(error).rejects.toThrow()
    }
    
  })
})
