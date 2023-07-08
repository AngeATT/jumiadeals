import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { RegistrationForm } from "../registration/registationForm";

const PROTOCOL = "http";
const PORT = 8080;
@Injectable()
export class RestDataSource{
    baseUrl: string;
    auth_token?: string;

    constructor(private http: HttpClient){
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`
    }

    authenticate(email?: string, password?: string): Observable<boolean>{
        return this.http.post<any>(this.baseUrl + "login", {
            email: `${email}`,
            password: `${password}`
        }).pipe(map(reponse => {
            console.log(reponse);
            return reponse.sucess;
        }));
     }

     register(userInformations : RegistrationForm){
        return this.http.post<any>(this.baseUrl+"register", JSON.stringify(userInformations)).pipe(
            map(response => {
                return response.sucess;
            })
        )
     };



}