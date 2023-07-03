import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

const PROTOCOL = "http";
const PORT = 8080;
@Injectable()
export class RestDataSource{
    baseUrl: string;
    auth_token?: string;

    constructor(private http: HttpClient){
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}`
    }

    // authenticate(email?: string, password?: string): Observable<boolean>{
        
    // }


}