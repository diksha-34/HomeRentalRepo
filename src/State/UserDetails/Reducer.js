// UserDetails/Reducer.js

import { FIND_ALL_USERS_FAILURE, FIND_ALL_USERS_REQUEST, FIND_ALL_USERS_SUCCESS } from "./ActionType";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

export const allUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_ALL_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FIND_ALL_USERS_SUCCESS:
      return { 
        ...state, 
        loading: false, 
        error: null, 
        users: action.payload 
      };
    case FIND_ALL_USERS_FAILURE:
      return { 
        ...state, 
        loading: false, 
        error: action.payload 
      };
    default:
      return state;
  }
};
