import { appConfig } from './../../app.config';
import { Injectable } from '@angular/core';
import { IUser } from '../models/auth.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResponse } from '../models/global.model';
// import { IStaticPermission } from '../enums/app.enum';
import { environment } from '../../../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  permission!: string[];
  url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  login(user: {
    loginName: string;
    passWord: string;
  }): Observable<IResponse<IUser>> {
    return this.http.post<IResponse<IUser>>(`${this.url}/User/Login`, user);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('HLI-token');
  }

  storeUser(user: IUser): void {
    // Save User in localStorage

    localStorage.setItem(
      'HLI-user',
      JSON.stringify({
        userName: user.userName,
        email: user.email,
        profilePicture: user.profilePicture,
        userId: user.userId,
        userRole: user.userRole,
        permission: user.permissions,
      })
    );

    // Save authentication Token in Cookies
    // const timeObject = new Date();
    // const milliseconds = user.tokenExpInMin * 60 * 1000; // Add minutes to current date get expiration date
    localStorage.setItem('HLI-token', user.authenticationToken);
  }

  getCurrentUser(): IUser | false {
    if (!this.isLoggedIn()) return false;
    return JSON.parse(localStorage.getItem('HLI-user')!);
  }

  getToken(): string {
    return !!localStorage.getItem('HLI-token')
      ? `Bearer ${localStorage.getItem('HLI-token')}`
      : '';
  }

  // checkPermission(isExist: IStaticPermission | undefined): boolean {
  //   if (!isExist) return true;
  //   if (isExist === '/') return true;
  //   const userPermission: any[] = JSON.parse(
  //     localStorage.getItem('HLI-user') as string
  //   )?.permission;

  //   if (!userPermission) return false;

  //   return userPermission.some(
  //     (e: { permission: IStaticPermission }) => e.permission === isExist
  //   );
  // }

  logout(token: string): Observable<any> {
    localStorage.removeItem('HLI-user');
    localStorage.removeItem('HLI-token');
    return this.http.post<any>(`${this.url}/User/Login`, token);
  }
}
