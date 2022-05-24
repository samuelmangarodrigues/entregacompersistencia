import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";

const userGetService = async ()=>{
        
    const userRepository = AppDataSource.getRepository(User)
    const allUsers = userRepository.find()

    return allUsers


}
export default userGetService