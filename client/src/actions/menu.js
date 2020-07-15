import * as actionTypes from './actionTypes';

export const getMenu = () => ({
  type: actionTypes.menu.request,
});

export const deleteRecipe = (id) => ({
  type: actionTypes.menu.delete,
  payload: id,
});

export const updateRecipe = (id, body) => ({
  type: actionTypes.menu.update,
  id,
  body,
});

export const createRecipe = (body) => ({
  type: actionTypes.menu.save,
  payload: body,
});

export const getMenuSuccess = (body) => ({
  type: actionTypes.menu.success,
  payload: body,
});

export const getMenuError = (error) => ({
  type: actionTypes.menu.error,
  payload: error,
});
