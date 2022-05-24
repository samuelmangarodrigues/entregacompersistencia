
export interface IUsers {
    id: string
    name: string
    email: string
}

export interface IUserCreate {
    name: string
    email: string
    password:string,
    age:number
}


export interface IId{
    id:string
}

export interface IUserUpdate{
    name: string
    email: string
    password:string
    age:number
    id:any
}