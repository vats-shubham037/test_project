import { SET_SEARCH_DATA } from "../actions/types/types";

const initState = {
    sku:{data:[], error:''}
  };
  
  const SearchReducer = (state = initState, action) => {
    switch (action.type) {
      case SET_SEARCH_DATA:
        return {
          ...state,
          [action.payload.target]: { ...state[action.payload.target], data:action.payload.data,error:action.payload.error}
        
        };
      default:
        return { ...state };
    }
  };
  
  export default SearchReducer;
  