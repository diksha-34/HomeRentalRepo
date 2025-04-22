import { api } from "../../Config/ApiConfig";
import { CREATE_USER_PAYMENT_FAILURE, CREATE_USER_PAYMENT_REQUEST, CREATE_USER_PAYMENT_SUCCESS, GET_USER_PAYMENT_BY_ID_FAILURE, GET_USER_PAYMENT_BY_ID_REQUEST, GET_USER_PAYMENT_BY_ID_SUCCESS } from "./ActionType";
export const createUserPayment=(reqData)=>async(dispatch)=>{
    dispatch({type:CREATE_USER_PAYMENT_REQUEST})
    try {
        const {data}=await api.post(`/api/userPayment/`, reqData)
        if(data.id){
            reqData.navigate({search : `&house_id=${data.id}`})
        }
        dispatch({type:CREATE_USER_PAYMENT_SUCCESS, payload:data})
    } catch (error) {
        dispatch({type:CREATE_USER_PAYMENT_FAILURE, payload:error.message})
    }
}

export const getUserPaymentById=(houseId)=>async(dispatch)=>{
    dispatch({type:GET_USER_PAYMENT_BY_ID_REQUEST})
    try {
        const {data}=await api.get(`/api/userPayment/${houseId}`)
        dispatch({type:GET_USER_PAYMENT_BY_ID_SUCCESS, payload:data})
    } catch (error) {
        dispatch({type:GET_USER_PAYMENT_BY_ID_FAILURE, payload:error.message})
    }
}