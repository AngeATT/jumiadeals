import { Injectable } from "@angular/core";
import { RestDataSource } from "../datasources/spring.rest.source";
import { Observable } from "rxjs";
import { registrationForm } from "../registration/registationForm";

@Injectable()
export class AuthService{
    email?: string;
    password?: string;

    constructor(private datasource: RestDataSource){}

    authenticate(email?: string, password?: string): Observable<boolean>{
        return this.datasource.authenticate(email,password);
    }

    // register(registrationForm: registrationForm) : Observable<Boolean>{
    //     return this.datasource.register(registrationForm);
    // }
}