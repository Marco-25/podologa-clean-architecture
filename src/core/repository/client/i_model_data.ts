
export interface IGet {
    id: number
}

export interface ICreate {
    name: string
    email: string
    bithDate: string
}

export interface IUpdate {
    id: number
    name: string
    birthDate: string
}

export interface IGetEmail {
    email: string
}