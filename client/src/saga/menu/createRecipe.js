import { takeLatest, put, apply, select } from 'redux-saga/effects';
import { api } from '../../apiServices';
import * as actionTypes from '../../actions/actionTypes';
import { getMenuError, getMenuSuccess } from '../../actions/menu';

const getMenuFromStore = (state) => state.menu.menu;

function* createRecipe({ payload }) {
  const response = yield apply(api, api.createRecipe,[payload]);
  const menu = yield select(getMenuFromStore);
  if (response.status === 201) {
    yield put(getMenuSuccess([...menu, response.data]));
  } else {
    yield put(getMenuError(response.message));
  }
}

export function* watchCreateRecipe() {
  yield takeLatest(actionTypes.menu.save, createRecipe);
}
