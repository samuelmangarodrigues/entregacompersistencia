import { Request,Response } from "express";
import userGetService from "../services/users/userGet.Services"



const userGetController=async (req:Request,res:Response) =>{
    try {

        const users = await userGetService()

        return res.send(users)

    } catch (err) {

        if (err instanceof Error) {

            return res.status(400).send({
                "error": err.name,
                "message": err.message
            })
        }
    }
}
export default userGetController
