import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { RegistrationForm } from "../registration/registationForm";

const baseUrl = `localhost://${location.hostname}:8080/api/auth/`
@Injectable()
export class RestDataSource{
    auth_token?: string;

    constructor(private http: HttpClient){ }

    authenticate(email?: string, password?: string): Observable<boolean>{
        return this.http.post<any>(baseUrl + "login", {
            email: `${email}`,
            password: `${password}`
        }).pipe(map(reponse => {
            console.log(reponse);
            return reponse.sucess;
        }));
     }

     register(userInformations : RegistrationForm){
        return this.http.post<any>(baseUrl+"register", JSON.stringify(userInformations)).pipe(
            map(response => {
                return response.sucess;
            })
        )
     };



}