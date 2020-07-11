import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthDataStorageService {

  constructor(private httpClient: HttpClient) {}

  signIn(email: string, password: string) {
    const data = 'email=' + email + '&password=' + password + '&grant_type=password';
    let reqHeader = new HttpHeaders();

    reqHeader = reqHeader.append('Content-Type', 'application/x-www-form-urlencoded');
    reqHeader = reqHeader.append('No-Auth', 'True');

    return this.httpClient.post('https://admin.barikoi.xyz:8090/auth/login', data, {headers: reqHeader});
  }
}
