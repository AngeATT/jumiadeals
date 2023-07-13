/**
 * Service qui va gérer l'authentification à travers l'envoie de requete de connexion, deconnexion et inscription pour communiquer avec le back-end
 */
import { Injectable } from "@angular/core";
import { RestDataSource } from "../datasources/spring.rest.source";
import { Observable } from "rxjs";
import { RegistrationForm } from "../registration/registationForm";

@Injectable()
export class AuthService{
    email?: string;
    password?: string;

    constructor(private datasource: RestDataSource){}

    login(email?: string, password?: string): Observable<boolean>{
        return this.datasource.login(email,password);
    }

    register(registrationForm: RegistrationForm) : Observable<Boolean>{
         return this.datasource.register(registrationForm);
     }
}