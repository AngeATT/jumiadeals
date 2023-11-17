/**
 * Service qui va gérer l'authentification à travers l'envoie de requete de connexion, deconnexion et inscription pour communiquer avec le back-end
 */
import { Injectable } from "@angular/core";
import { RestDataSource } from "../datasources/spring.rest.source";
import { Observable } from "rxjs";
import { RegistrationForm } from "../registration/registationForm";
import { UserCredentials } from "./user.credentials";
import { StorageService } from "./storage.service";

@Injectable()
export class AuthService{
    email?: string;
    password?: string;

    constructor(private datasource: RestDataSource, private storage : StorageService){}

    login(email? :string,password?: string): Observable<any>{
        return this.datasource.login(email,password);
    }

    register(registrationForm: RegistrationForm) : Observable<any>{
         return this.datasource.register(registrationForm);
     }

     logout(){
        return this.datasource.logout();
     }

     isLogged() : boolean{
      return this.storage.isLoggedIn();
     }

}
