import { SET_SELECTED_DATA } from "../actions/types/types";

const initState = {
    selectedSku:{}
  };
  
  const SelectReducer = (state = initState, action) => {
    switch (action.type) {
      case SET_SELECTED_DATA:
        return {
          ...state,
          [action.payload.target]: action.payload.data
        
        };
      default:
        return { ...state };
    }
  };
  
  export default SelectReducer;
  