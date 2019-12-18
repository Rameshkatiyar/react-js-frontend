import {updateUser, viewUser, UserDataActionType} from '../action/UserDataAction'

const userDataReducer = (state = {}, action) => {
    switch (action.type) {
        case UserDataActionType.UPDATE_USER: {
            return updateUser.payload;
        }
        break;
        case UserDataActionType.VIEW_USER: {
            return viewUser.user;
        }
        break;
        default: {
            return state;
        }
    }

};

export default userDataReducer;