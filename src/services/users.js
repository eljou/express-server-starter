import {
    SUCCESS,
    CREATED,
    NOT_FOUND,
    CONFLICT
} from '../utils/statusCodes';
import User from '../models/User';

// Users method service
export const getUsers = async () => {
    const listOfUsers = await User.find();
    if (listOfUsers.length === 0) {
        return { statusCode: NOT_FOUND, data: 'There are no users registered' }    
    }
    return { statusCode: SUCCESS, data: listOfUsers };
};

export const createUser = async (newUser) => {
    if (await User.findOne({ email: newUser.email })) {
      return { statusCode: CONFLICT, data: 'User already exists' }  
    } 

    const savedUser = await (new User({...newUser})).save();
    return { statusCode: CREATED, data: savedUser };
};

export const updateUser = async (userId, newUser) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(userId, newUser);
        return { statusCode: SUCCESS, data: updatedUser };
    } catch (error) {
        console.log(error.message);
        return { statusCode: NOT_FOUND, data: 'User not found' }  
    }
};

export const deleteUser = async (userId) => {
    console.log(userId);
    try {
        const removedUser = await User.findByIdAndRemove(userId);
        return { statusCode: SUCCESS, data: removedUser };
    } catch (error) {
        console.log(error.message);
        return { statusCode: NOT_FOUND, data: 'User not found' }
    }
};
