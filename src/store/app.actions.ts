import { createAction, props } from "@ngrx/store";
import { IUser } from "src/app/auth.service";

export const increment = createAction('[increment] value', props<{value: number}>());
export const decrement = createAction('[decrement] value ', props<{value: number}>());
export const get_user = createAction('[get user]', props<{user: IUser}>());
export const set_user =  createAction('[set user]', props<{userList: IUser[]}>());

