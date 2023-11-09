import "dotenv/config";
import { compare } from "bcryptjs";
import  User  from "../entities/user.entities";
import AppError from "../errors/AppError.error";
import { ReturnLogin, UserLogin } from "../interfaces/users.interfaces";
import { usersRepo } from "../repositories";
import { sign } from "jsonwebtoken";

export  const LoginService = async (data: UserLogin): Promise<ReturnLogin> => {

    const { email } = data;

    const user: User | null = await usersRepo.findOneBy({ email });

    if(!user) throw new AppError("Invalid credentials", 401);

    const comparePass = await compare(data.password, user.password);

    if(!comparePass) throw new AppError("Invalid credentials", 401);

    const token : string = sign(
        {email: user.email, admin: user.admin},
        process.env.SECRET_KEY!,
        {subject: user.id.toString()}
    )

    return {token};

};