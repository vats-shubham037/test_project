import { store } from '../storeConfig/store';
import { SET_SELECTED_DATA } from './types/types';
export const selectData = async (value, target) => {
    store.dispatch({type: SET_SELECTED_DATA,
        payload: { data: value, target: target },})     
};
