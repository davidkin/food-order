import * as actionTypes from '../actions/actionTypes';

const initialValue = {
  menu: [],
  isDataReceived: false,
  isFetch: false,
  error: null,
};

export const menu = (state = initialValue, { type, payload }) => {
  switch (type) {
    case actionTypes.menu.request:
    case actionTypes.menu.delete:
    case actionTypes.menu.save:
    case actionTypes.menu.update:
      return {
        ...state,
        isFetch: true,
      };

    case actionTypes.menu.success:
      return {
        ...state,
        menu: payload,
        isDataReceived: true,
        isFetch: false,
      };

    case actionTypes.menu.error:
      return {
        ...state,
        isDataReceived: true,
        isFetch: false,
        error: payload,
      };

    default:
      return state;
  }
};
