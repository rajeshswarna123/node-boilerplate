import {UserSchema, User} from '../../models/user'

export async function register(userDetails:typeof UserSchema): Promise<boolean>{
    const user = new User(userDetails);
    await user.save();
    return user._id? true: false;
}