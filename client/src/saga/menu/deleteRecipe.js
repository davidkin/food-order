import { takeLatest, put, apply, select } from 'redux-saga/effects';
import { api } from '../../apiServices';
import { deleteItemFromArrayById } from '../../utils';
import * as actionTypes from '../../actions/actionTypes';
import { getMenuError, getMenuSuccess } from '../../actions/menu';

const getMenuFromStore = (state) => state.menu.menu;

function* deleteMenu({ payload }) {
  const response = yield apply(api, api.deleteRecipe,[payload]);
  const menu = yield select(getMenuFromStore);
  if (response.status === 200) {
    yield put(getMenuSuccess(deleteItemFromArrayById(payload, menu)));
  } else {
    yield put(getMenuError(response.message));
  }
}

export function* watchDeleteMenu() {
  yield takeLatest(actionTypes.menu.delete, deleteMenu);
}
