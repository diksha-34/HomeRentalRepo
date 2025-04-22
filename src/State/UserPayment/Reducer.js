import { CREATE_USER_PAYMENT_FAILURE, CREATE_USER_PAYMENT_REQUEST, CREATE_USER_PAYMENT_SUCCESS, GET_USER_PAYMENT_BY_ID_FAILURE, GET_USER_PAYMENT_BY_ID_REQUEST, GET_USER_PAYMENT_BY_ID_SUCCESS } from "./ActionType";

const initialState = {
    userPayments: [],
    loading: false,
    error: null,
    userPayment: null
}
export const userPaymentReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER_PAYMENT_REQUEST:
            return {...state, loading: true, error:null}

        case CREATE_USER_PAYMENT_SUCCESS:
            return {...state, userPayment:action.payload, loading: false, success:true, error:null }

        case CREATE_USER_PAYMENT_FAILURE:
            return {...state, loading: false, error: action.payload }

       
        case GET_USER_PAYMENT_BY_ID_REQUEST:
            return {...state, loading: true, error:null}

        case GET_USER_PAYMENT_BY_ID_SUCCESS:
            return {...state, error:null, userPayment:action.payload, loading: false, success:true }

        case GET_USER_PAYMENT_BY_ID_FAILURE:
            return {...state, loading: false, error: action.payload }

        default:
            return state;
    }
}