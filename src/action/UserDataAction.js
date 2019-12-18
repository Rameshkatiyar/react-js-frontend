//Create constant
const UserDataActionType = {
    UPDATE_USER: "UPDATE_USER",
    VIEW_USER: "VIEW_USER"
};


//Create Object

const updateUser = {
    type: UPDATE_USER,
    payload: "Updated User Data"
};

const viewUser = user => ({
    type: VIEW_USER,
    user
});

export {updateUser, viewUser, UserDataActionType};


// OR
// const UserDataAction = {
//     updateUser: () => {type: UPDATE_USER, payload: "Updated User Data"},
//     viewUser: (user) => {type: VIEW_USER, user},
// };
//
// export default UserDataAction;