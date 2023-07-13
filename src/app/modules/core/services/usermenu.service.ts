import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
/**
 * Service pour servir des methodes à accès public et protected
 */
const API_URL = "const API_URL = 'http://localhost:8080/api/auth/";
@Injectable({
    providedIn: 'root'
})
export class UserMenuService{
    constructor(private http : HttpClient){};

    getUserBoard() : Observable<any>{
        return this.http.get(API_URL + 'mod', { responseType: 'text' });
    }
}