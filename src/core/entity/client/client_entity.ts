
export class ClientEntity {
    id: number
    name: string
    email: string
    bithDate: string
    
    constructor(id: number, name: string, email: string, bithDate: string) {
        this.id = id
        this.name = name
        this.email = email
        this.bithDate = bithDate
    }
}