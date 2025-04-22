import { api } from '../../Config/ApiConfig'
import { CREATE_PAYMENT_FAILURE, CREATE_PAYMENT_REQUEST, CREATE_PAYMENT_SUCCESS, UPDATE_PAYMENT_FAILURE, UPDATE_PAYMENT_REQUEST, UPDATE_PAYMENT_SUCCESS } from './ActionType';

export const createPayment = (houseId, userId) => async (dispatch) => {
    dispatch({ type: CREATE_PAYMENT_REQUEST });
    try {
      const response = await api.post(`/api/payments/${houseId}?userId=${userId}`, {});
      const data = response.data;
      if (data.payment_link_url) {
        window.location.href = data.payment_link_url;
        dispatch({ type: CREATE_PAYMENT_SUCCESS });
      } else {
        dispatch({ type: CREATE_PAYMENT_FAILURE, payload: "Payment link not found in response" });
      }
    } catch (error) {
      console.error("Error creating payment:", error);
      dispatch({ type: CREATE_PAYMENT_FAILURE, payload: error.message });
    }
  };
  

export const updatePayment=(reqData)=>async (dispatch)=>{
    dispatch({type:UPDATE_PAYMENT_REQUEST})
    try {
        const {data}=await api.get(`/api/payments?payment_id=${reqData.paymentId}&houseId=${reqData.houseId}&userId=${reqData.userId}`);
        dispatch({ type: UPDATE_PAYMENT_SUCCESS, payload:data });
    } catch (error) {
        dispatch({type:UPDATE_PAYMENT_FAILURE, payload:error.message})
    }
}