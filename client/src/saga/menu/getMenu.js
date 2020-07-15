import { takeLatest, put, apply } from 'redux-saga/effects';
import { api } from '../../apiServices';
import * as actionTypes from '../../actions/actionTypes';
import { getMenuError, getMenuSuccess } from '../../actions/menu';

function* getMenu() {
  const response = yield apply(api, api.getMenu, []);
  if (response.status === 200) {
    yield put(getMenuSuccess(response.data));
  } else {
    yield put(getMenuError(response.message));
  }
}

export function* watchGetMenu() {
  yield takeLatest(actionTypes.menu.request, getMenu);
}
