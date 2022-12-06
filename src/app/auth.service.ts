import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IUser {
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  get isUserLoggedIn() {
    return false;
  }

  getUserData(user: IUser): Observable<IUser[]> {
    console.log('data received is');
    console.log(user);
    return this.http.get<IUser[]>('/assets/data.json');
  }
}
