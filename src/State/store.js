import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import { houseSearch } from "./House/Reducer";
import { userPaymentReducer } from "./UserPayment/Reducer";
import { allUserReducer } from "./UserDetails/Reducer";

const rootReducers=combineReducers({
    auth:authReducer,
    houses: houseSearch,
    userPayment:userPaymentReducer,
    allUser:allUserReducer,
})
export const store=legacy_createStore(rootReducers, applyMiddleware(thunk))