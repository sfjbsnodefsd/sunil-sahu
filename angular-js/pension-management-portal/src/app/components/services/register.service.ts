import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private readonly regURL = 'http://localhost:4200/auth/reg';
  private readonly loginURL = 'http://localhost:4200/auth/login';
  private readonly processPensionURL = 'http://localhost:4200/processPension';

  constructor(private http: HttpClient) {       
  }

  saveUser(newUser: any) {
    return this.http.post<any>(this.regURL, newUser);
  }

  login(user: any) {
    return this.http.post<any>(this.loginURL, user);
  }

  getPensionDetails(aadharNumber: string) {
    const token = localStorage.getItem("token");
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(this.processPensionURL+"/"+aadharNumber, { 'headers': headers });
  }

}

