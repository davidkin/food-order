import {
  takeLatest, put, apply, select,
} from 'redux-saga/effects';
import { api } from '../../apiServices';
import * as actionTypes from '../../actions/actionTypes';
import { updateItemFromArrayById } from '../../utils';
import { getMenuError, getMenuSuccess } from '../../actions/menu';

const getMenuFromStore = (state) => state.menu.menu;

function* updateRecipe({ id, body }) {
  const response = yield apply(api, api.updateRecipe, [id, body]);
  const menu = yield select(getMenuFromStore);
  if (response.status === 200) {
    yield put(getMenuSuccess(updateItemFromArrayById(id, menu, { id, ...body })));
  } else {
    yield put(getMenuError(response.message));
  }
}

export function* watchUpdateRecipe() {
  yield takeLatest(actionTypes.menu.update, updateRecipe);
}
