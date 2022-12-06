import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { AuthService, IUser } from 'src/app/auth.service';
import { get_user, set_user } from './app.actions';
import { mergeMap, map } from 'rxjs';
import { createEffect } from '@ngrx/effects';

@Injectable()
export class UserEffect {
  constructor(private authService: AuthService, private action$: Actions) {}

  getUserData$ = createEffect(() => {
    return this.action$.pipe(
      ofType(get_user),
      mergeMap((action) => {
        debugger
        return this.authService.getUserData(action.user).pipe(
          map((data) => {
            return set_user({ userList: data });
          })
        );
      })
    );
  });
}
