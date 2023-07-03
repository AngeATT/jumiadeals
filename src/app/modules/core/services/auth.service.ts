import { Injectable } from "@angular/core";
import { RestDataSource } from "../datasources/spring.rest.source";

@Injectable()
export class AuthService{
    email?: string;
    password?: string;

    constructor(private datasource: RestDataSource){}

    authenticate(email? : string, password?: string){

    }
}