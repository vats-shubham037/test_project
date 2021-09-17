// import external modules
import { combineReducers } from 'redux';
import LoaderReducer from './loader/loaderReducer';
import SearchReducer from "./searchReducer";
import SelectReducer from './selectReducer'

const rootReducer = combineReducers({
  loader: LoaderReducer,
  search: SearchReducer,
  select: SelectReducer
});

export default rootReducer;
