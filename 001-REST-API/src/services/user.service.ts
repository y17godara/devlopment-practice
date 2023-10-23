import UserModel from '../models/user.model'

export async function createUser(input: any) {
    try {
        return await UserModel.create(input);
    } catch (error: any) {
        throw new Error(error);
    } 
}
