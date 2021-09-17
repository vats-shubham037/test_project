import { setloader } from './loader/loaderAction';
import { api } from '../../api/api';
import { store } from '../storeConfig/store';
import { SET_SEARCH_DATA } from './types/types';

export const searchData = async (value, endpoint, target) => {
  store.dispatch(setloader(true));
  // api called to get sku data
  await api(
    `${endpoint}=${value}`,
    {},
    'get'
  )
    .then((res) => {
      if (res.status === 400) {
        console.log('error');
      } else {
        // updating store once data retrived
        store.dispatch({type:SET_SEARCH_DATA, payload: { data: res.data[target], target,  error: res.data[target].length ? "":'No matches found' },})
      }
      store.dispatch(setloader(false));
    })
    .catch((err) => {
      console.log('Some internal error occured! Try again!');
    });
};
