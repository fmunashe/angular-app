import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _registerUrl = '';
  private _loginUrl = '';

  constructor(private http: HttpClient) {
  }

  registerUser(user): Observable<any> {
    return this.http.post<any>(this._registerUrl, user);
  }

  userLogin(credentials): Observable<any> {
    return this.http.post<any>(this._loginUrl, credentials);
  }
}
