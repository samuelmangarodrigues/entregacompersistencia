import { Request,Response } from "express";
import userGetOneServices from "../services/users/userGetOne.Services";

const userGetOneController = async (req:Request,res:Response)=>{
    try{
        const {id}=req.params
        const user= await userGetOneServices(id)

        return res.send(user)
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
export default userGetOneController