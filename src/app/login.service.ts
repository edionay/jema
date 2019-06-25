import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiURL = `http://localhost:8080/api/login`

  constructor(private http: HttpClient) { }

  signIn(credentials) {
    return this.http.post(`${this.apiURL}/signup`, credentials)
  }

  getCurrentUser() {

  }

  setCurrentUser(user) {

  }
}
