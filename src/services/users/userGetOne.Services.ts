import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"

const userGetOneServices = async (id:any) =>{

        const userRepository= AppDataSource.getRepository(User)
        const users =await userRepository.find()

        const user=users.find(u=>u.id===id)
        console.log(user)
        return user
}
export default userGetOneServices