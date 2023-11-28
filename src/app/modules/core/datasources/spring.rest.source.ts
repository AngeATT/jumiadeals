import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { RegistrationForm } from "../registration/registationForm";
import { DataSource } from "./datasource.interface";

const baseUrl = `http://${location.hostname}:8080/api/auth/`

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RestDataSource implements DataSource {
    auth_token?: string;

    constructor(private http: HttpClient) { }
    logout(): Observable<any> {
        return this.http.post<any>(baseUrl + "/signout", {}, httpOptions);
    }

    login(email?: string, password?: string): Observable<any> {
        return this.http.post
            (baseUrl + "login", {
                email: `${email}`,
                password: `${password}`
            },
                httpOptions)
    }
    /**
     * Methode pour enregistrer dans la bd mongoDB
     * @param userInformations
     * @returns
     */
    register(userInformations: RegistrationForm): Observable<any> {
        return this.http.post(baseUrl + "register", {
            nom: userInformations.nom,
            email: userInformations.email,
            password: userInformations.password,
            numero: userInformations.numero,
            estWhatsapp: userInformations.estWhatsapp
        },httpOptions);
    };
}
