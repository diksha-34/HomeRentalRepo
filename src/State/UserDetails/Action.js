import { api } from "../../Config/ApiConfig";
import { FIND_ALL_USERS_FAILURE, FIND_ALL_USERS_REQUEST, FIND_ALL_USERS_SUCCESS } from "./ActionType";

export const findAllUsers = () => async (dispatch) => {
  dispatch({ type: FIND_ALL_USERS_REQUEST });
  try {
    const { data } = await api.get(`/api/payment/allUser`);
    dispatch({ type: FIND_ALL_USERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_ALL_USERS_FAILURE, payload: error.message });
  }
};
