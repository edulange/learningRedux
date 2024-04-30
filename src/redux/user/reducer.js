import UserActionTypes from "./action-types"

const initialState = {
	currentUser: null,
}

const userReducer = (state = initialState, action) => {
    // if (action.type === 'user/login') ficava mais claro assim.

    switch (action.type) {
        case UserActionTypes.LOGIN:
            return { ...state, currentUser: action.payload}
        case UserActionTypes.LOGOUT:
            return { ...state, currentUser: null}
        default:
            return state
    }

   /* if (action.type === UserActionTypes.LOGIN) {
        return { ...state, currentUser: action.payload} //tudo que for retornado vai ser assinlado ao state
    }

    if (action.type === UserActionTypes.LOGOUT) {
        return { ...state, currentUser: null}
        return state
    } */

}

export default userReducer
