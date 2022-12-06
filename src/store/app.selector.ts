import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppSate } from './app.store';

const appSelector = createFeatureSelector<AppSate>('app');

export const getCount = createSelector(appSelector, (state) => {
  return state.count;
});
