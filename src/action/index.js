export const selectUser = (user) => {
    console.log("you have clicked on  User :", user.first);
    return {
        type: "USER_SELECTED",
        payload: user
    }
}