import { Request,Response } from "express";
import createUserService from "../services/users/userCreate.Service"


const userCreateController = async (req:Request,res:Response) =>{

    try {

        const {name, email,password,age} = req.body

        const newUser =  await createUserService({name,email,password,age})
        
        return res.status(201).send(newUser)

    } catch (err) {

        if (err instanceof Error) {

            return res.status(400).send({
                "error": err.name,
                "message": err.message
            })
        }
    }}
export default userCreateController