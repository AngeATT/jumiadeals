import { Observable } from "rxjs";
import { RegistrationForm } from "../registration/registationForm";

 export interface DataSource{
    login(email : string, password : string) : Observable<any>;

    register(userInformations : RegistrationForm) : Observable<any>;

    logout() : Observable<any>;
}