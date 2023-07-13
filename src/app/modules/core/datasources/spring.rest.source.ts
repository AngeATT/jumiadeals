import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { RegistrationForm } from "../registration/registationForm";
import { DataSource } from "./datasource.interface";

const baseUrl = `localhost://${location.hostname}:8080/api/auth/`

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RestDataSource implements DataSource {
    auth_token?: string;

    constructor(private http: HttpClient) { }
    logout(): Observable<any> {
        return this.http.post<any>(baseUrl + "/logout", {}, httpOptions);
    }

    login(email?: string, password?: string): Observable<boolean> {
        return this.http.post<any>(baseUrl + "login", {
            email: `${email}`,
            password: `${password}`
        },
            httpOptions).pipe(map(reponse => {
                console.log(reponse);
                return reponse.sucess;
            }));
    }

    register(userInformations: RegistrationForm): Observable<any> {
        return this.http.post<any>(baseUrl + "register", JSON.stringify(userInformations), httpOptions).pipe(
            map(response => {
                return response.sucess;
            })
        )
    };



}