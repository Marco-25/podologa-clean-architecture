import { ClientEntity } from "../../../src/core/entity/client"
import { IGetClientRepository } from "../../../src/core/repository/client"
import { GetClientUsecase } from "../../../src/core/usecase/client"
import ClientRepositoryMemory from "../../mock-repository/client/clientRepositotyMemory"


const fakeClient = (): ClientEntity[] => ([{id: 1, name: "marco", email: "email@mail.com", bithDate: "03/10/1991"},
{id: 2, name: "Antonio", email: "email@mail.com", bithDate: "03/10/1998"}])

interface sutTypes {
  sut: GetClientUsecase
  repository: IGetClientRepository
}
const makeSut = (): sutTypes => {
  const repository = new ClientRepositoryMemory()
  const sut = new GetClientUsecase(repository)
  return {
    sut,
    repository
  }
}

describe('Client', () => {
  test('Should be return categories', async () => {
    const { sut } = makeSut()
    const result = await sut.execute()
    expect(result).toEqual(fakeClient())
  })

  test('Should be return throw error', async () => {
    const { sut, repository } = makeSut()
    jest.spyOn(repository, 'get').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const promise = sut.execute()
    await expect(promise).rejects.toThrow()
  })
})
