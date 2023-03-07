
import { GET_USERS } from "./userTypes"

export const getUsers = (users) => {
    return{
        type:GET_USERS,
        payload:{
            users
        }
    }
}