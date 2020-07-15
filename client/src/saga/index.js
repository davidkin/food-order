import { all } from 'redux-saga/effects';
import { watchGetMenu } from "./menu/getMenu";
import { watchDeleteMenu } from './menu/deleteRecipe';
import { watchCreateRecipe } from './menu/createRecipe';
import { watchUpdateRecipe } from './menu/updateRecipe';

export function* rootSaga() {
  yield all(
    [
      watchGetMenu(),
      watchDeleteMenu(),
      watchCreateRecipe(),
      watchUpdateRecipe(),
    ],
  );
}
