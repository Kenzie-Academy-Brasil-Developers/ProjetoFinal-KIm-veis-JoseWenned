import  User  from "../entities/user.entities";
import { UserCreate, UserReadReturn, UserReturn, UserUpdate } from "../interfaces/users.interfaces";
import { usersRepo } from "../repositories";
import { userReturnListSchema, userReturnSchema } from "../schemas/users.schema";

export  const createUserService = async (data: UserCreate): Promise<UserReturn> => {

    const user: User = usersRepo.create(data);

    await usersRepo.save(user);

    return userReturnSchema.parse(user);

};

export const readAllUserService = async (): Promise<UserReadReturn> => {

    const users: User[] = await usersRepo.find();

    return userReturnListSchema.parse(users);

};

export const updateUserService = async (data: UserUpdate, user: User): Promise<UserReturn> => {

    const userUpdate: User = await usersRepo.save({ ...user, ...data });

    await usersRepo.save(userUpdate);

    return userReturnSchema.parse(userUpdate);
    
};


export const deleteUserService = async (user: User): Promise<void> => {

    await usersRepo.softRemove(user);
    
};
