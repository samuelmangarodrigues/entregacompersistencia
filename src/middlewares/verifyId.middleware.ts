import { Request,Response,NextFunction } from "express"
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const verifyUserExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    const {id}=req.params
    const userRepository= AppDataSource.getRepository(User)
    const user= await userRepository.find()
    const foundUser = user.find(u=>u.id===id);

  if (!foundUser) {
    return res.status(409).json({ message: "Id not exists!" });
  }

  return next();
};

export default verifyUserExists;