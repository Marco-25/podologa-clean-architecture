import { IClientRepository } from "../../../src/core/repository/client"
import { CreateClientUsecase } from "../../../src/core/usecase/client"
import ClientRepositoryMemory from "../../mock-repository/client/clientRepositotyMemory"


interface sutTypes {
  sut: CreateClientUsecase
  repository: IClientRepository
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
  test('Should be create clients', async () => {
    const { sut } = makeSut()
    const result = await sut.execute({name: "Marco", email: "email1@mail.com", birthDate: "25/02/2000"})
    expect(result.body).toBe( `Client created with success.`)
  }) 

  test('Should be return throw error if email already exists', async () => {
      const { sut } = makeSut()
      const result = await sut.execute({name: "Marco", email: "email@mail.com", birthDate: "25/02/2000"})
      expect(result.body).toBe("Invalid param:: email already exists") 
  })

  test('Should be return throw error if repository fails ', async () => {
    try {
      const { sut, repository } = makeSut()
      jest.spyOn(repository, 'save').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
      sut.execute({name: "Marco", email: "email1@mail.com", birthDate: "25/02/2000"})
    } catch (error) {
      expect(error).rejects.toThrowError()
    }
        
  })
})
