/**
 * Service qui va gérer l'authentification à travers l'envoie de requete de connexion, deconnexion et inscription pour communiquer avec le back-end
 */
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RestDataSource } from "../datasources/spring.rest.source";
import { RegistrationForm } from "../registration/registationForm";
import { StorageService } from "./storage.service";

const API_BACK = "http://localhost:8080/api/auth";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'text/plain' })
};

@Injectable()
export class AuthService {
  email?: string;
  password?: string;

  constructor(private datasource: RestDataSource, private storage: StorageService, private http: HttpClient) { }

  login(email?: string, password?: string): Observable<any> {
    return this.datasource.login(email, password);
  }

  register(registrationForm: RegistrationForm): Observable<any> {
    return this.datasource.register(registrationForm);
  }

  logout() {
    return this.datasource.logout();
  }

  isLogged(): boolean {
    return this.storage.isLoggedIn();
  }

  verifyToken(token: string): Observable<any> {
    const url = API_BACK + "/activate"
    const body= token;
    return this.http.post(url, body, httpOptions);
  }

  resendToken(token: string): Observable<any> {
    const url  = API_BACK + "/resend"
    const body = token;
    return this.http.post(url, body, httpOptions);
  }

}
