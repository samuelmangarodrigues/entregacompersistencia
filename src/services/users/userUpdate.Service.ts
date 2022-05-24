import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import {IUserUpdate} from "../../interfaces/index"
import { Request } from "express";
const userUpdateService = async ({body,params}:Request)=>{
    // const now = new Date

    // const options:object = {
    //     timeZone: 'America/Sao_Paulo',
    //     hour: 'numeric',
    //     minute: 'numeric'
    // };  

    // const date = new Intl.DateTimeFormat([], options);
    // const fullDate =now.getDate() + "/" + now.getMonth() +"/"+ now.getFullYear();




    const {id}=params
    const{name,email,password,age}=body
    console.log(name,email,password,age)
    const userRepository= AppDataSource.getRepository(User)
    const users = await userRepository.find()
    const user=users.find(u=>u.id ===id)
    console.log(user)
    if(!user){
        return new Error("User does not exists")
    }

    // user.name = name? name : user.name
    // user.email = email? email : user.email
    // user.password = password? password : user.password
    // user.age = age? age : user.age
    // user.created_at = user.created_at
    // user.updated_at = `${fullDate}, ${date.format(new Date())}`
    
    userRepository.save(user)

    return user

}
export default userUpdateService