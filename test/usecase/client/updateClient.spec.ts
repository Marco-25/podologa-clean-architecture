import { IClientRepository } from "../../../src/core/repository/client"
import { UpdateClientUsecase } from "../../../src/core/usecase/client"
import ClientRepositoryMemory from "../../mock-repository/client/clientRepositotyMemory"


interface SutTypes {
  sut: UpdateClientUsecase
  repository: IClientRepository
}

const makeSut = (): SutTypes => {
  const repository = new ClientRepositoryMemory()
  const sut = new UpdateClientUsecase(repository)
  return {
    sut,
    repository
  }
}

describe('Client', () => {
  test('Should be update clients', async () => {
    const { sut } = makeSut()
    const result = await sut.execute({id: 1,name: "Marco", birthDate: "25/02/2000"})
    expect(result.body).toEqual(`success`)
  }) 

  test('Should be return throw error if ID is null or undefined', async () => {
      const { sut } = makeSut()
      const result = await sut.execute({id: null, name: "Marco", birthDate: "25/02/2000"})
      expect(result.body).toEqual('Missing param: id')  
  })
  
  test('Should be return throw error if NAME is null or undefined', async () => {
      const { sut } = makeSut()
      const result = await sut.execute({id: 1, name: null, birthDate: "25/02/2000"})
      expect(result.body).toEqual('Missing param: name')
  })
  
  test('Should be return throw error if BIRTHDATE is null or undefined', async () => {
      const { sut } = makeSut()
      const result = await sut.execute({id: 1, name: "Marco", birthDate: null})
      expect(result.body).toEqual('Missing param: birthDate') 
  })

  test('Should be return throw error if repository fails ', async () => {
        try {
          const { sut, repository } = makeSut()
        jest.spyOn(repository, 'update').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
        const promise = sut.execute({id: 1, name: "Marco", birthDate: "25/02/2000"})
        } catch (error) {
        expect(error).rejects.toThrow()
        }
  })
})
