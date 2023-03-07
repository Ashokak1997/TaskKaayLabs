import * as actionTypes from "./userTypes";
const INITIAL_STATE = {
    users: []
}

const userReducer = (state = INITIAL_STATE , action) =>{
    switch (action.type) {
        case actionTypes.GET_USERS:
            return{
                ...state,
                users: action.payload,
                
            };
            default:
                return state ;
    }

}

export default userReducer;