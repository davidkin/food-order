import { createSelector } from 'reselect';

export const menuSelector = createSelector(
  (state) => state.menu.menu,
  (menu) => menu,
);
