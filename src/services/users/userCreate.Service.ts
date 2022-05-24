import { User } from "../../entities/user.entity";
import { IUsers,IUserCreate } from "../../interfaces";
import { AppDataSource } from "../../data-source";



const createUserService = async ({name,email,password,age}:IUserCreate)=>{
    const now = new Date

    const options:object = {
        timeZone: 'America/Sao_Paulo',
        hour: 'numeric',
        minute: 'numeric'
    };  

    const date = new Intl.DateTimeFormat([], options);
    const fullDate =now.getDate() + "/" + now.getMonth() +"/"+ now.getFullYear();





    const userRepository = AppDataSource.getRepository(User)
    const user = await userRepository.find()


    const emailAlreadyExists=user.find((u) => u.email===email)

    if(emailAlreadyExists){
        throw new Error("Email already exists")
    }

    const newUser = new User()    
    newUser.name = name
    newUser.email = email
    newUser.age=age
    newUser.password=password
    newUser.created_at =  `${fullDate}, ${date.format(new Date())}`,
    newUser.updated_at = `${fullDate}, ${date.format(new Date())}`

    userRepository.create(newUser)
    userRepository.save(newUser)

    return newUser
}
export default createUserService
