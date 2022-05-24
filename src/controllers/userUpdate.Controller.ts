import userUpdateService from "../services/users/userUpdate.Service";
import { Request,Response } from "express";


const userUpdateController =async(req:Request,res:Response)=>{
    try
        {
            const {id}=req.params
            const{name,email,password,age}=req.body

            const userUpdated= await userUpdateService({name,email,password,age,id})

            return res.send(userUpdated)
        }
        catch(err){
            if(err instanceof Error){
                return res.status(400).send({
                    "error":err.name,
                    "message":err.message
                })
            }
        }
}
export default userUpdateController