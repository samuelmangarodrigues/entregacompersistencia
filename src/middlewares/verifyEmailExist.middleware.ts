import { Request,Response,NextFunction } from "express"
import { User } from "../entities/user.entity"
import { AppDataSource } from "../data-source"

const verifyEmailMiddleware =async (req:Request,res:Response,next:NextFunction) =>{
    const {email}=req.body
    const userRepository = AppDataSource.getRepository(User)
    const user =  userRepository.find()

    const emailAlreadyExists=(await user).find(u =>u.email===email)  

    if(emailAlreadyExists){
        return res.status(400).send({
            "message":"Email Already exists"
        })
    }

    return next()

}
export default verifyEmailMiddleware