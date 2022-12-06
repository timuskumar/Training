import { createReducer, on } from '@ngrx/store';
import { decrement, increment, set_user } from './app.actions';
import { AppSate, intialState } from './app.store';

export const _appReducer = createReducer(
  intialState,
  on(increment, (state, action) => {
    return {
      ...state,
      count: state.count + action.value,
    };
  }),
  on(decrement, (state, action) => {
    return {
      ...state,
      count: state.count - action.value,
    };
  }),
  on(set_user, (state, action) => {
    return {
      ...state,
      users: action.userList,
    };
  })
);
