import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  private apiURL = `http://localhost:8080`;
  currentUser = ""

  constructor(private http: HttpClient) {}

  signIn(credentials) {
    return this.http.post(`${this.apiURL}/login`, credentials);
  }

  getDays() {
    return this.http.get(`${this.apiURL}/days`);
  }

  getCurrentUser() {
    return this.currentUser;
  }

  setCurrentUser(user) {
    this.currentUser = user
  }
}
