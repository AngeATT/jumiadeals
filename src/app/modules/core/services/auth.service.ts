import { Injectable } from "@angular/core";
import { RestDataSource } from "../datasources/spring.rest.source";
import { Observable } from "rxjs";
import { RegistrationForm } from "../registration/registationForm";

@Injectable()
export class AuthService{
    email?: string;
    password?: string;

    constructor(private datasource: RestDataSource){}

    authenticate(email?: string, password?: string): Observable<boolean>{
        return this.datasource.authenticate(email,password);
    }

    enregistrer(registrationForm: RegistrationForm) : Observable<Boolean>{
         return this.datasource.register(registrationForm);
     }
}