import { FIND_HOUSE_BY_ID_FAILURE, FIND_HOUSE_BY_ID_SUCCESS, FIND_HOUSE_SUCCESS } from './ActionType';

const initialState = {
  houses: [],
  loading: false,
  error: null,
  house: null
};

export const houseSearch = (state = initialState, action) => {
  switch (action.type) {
    case FIND_HOUSE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        houses: action.payload
      };
    case FIND_HOUSE_BY_ID_SUCCESS:
      return { ...state, loading: false, error: null, house: action.payload };
    case FIND_HOUSE_BY_ID_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
