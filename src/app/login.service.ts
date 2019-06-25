import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiURL = `http://localhost:8080/api/login`

  constructor(private http: HttpClient) { }

  signIn() {

  }
}
