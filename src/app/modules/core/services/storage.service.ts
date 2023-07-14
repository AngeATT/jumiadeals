import { Injectable } from "@angular/core";
import { UserCredentials } from "./user.credentials";

const USER_KEY = "auth-user";
/**
 * Classe pour gérer les informations de 
 * connexion de l'utilisateur en mémoire
 */
@Injectable({
    providedIn: 'root'
})
export class StorageService {
    constructor() { }
    clean(): void {
        window.sessionStorage.clear();
    }
    /**
     * Sauvegarder les identifiants de l'utilisateur dans les 
     * cookies
     * @param user identifiants de  l'utilisateur
     */
    public saveUser(user: UserCredentials): void {
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    }
    /**
     * 
     * @returns Recuperer l'utilisateur qui est connecté s'il    existe
     */
    public getUser(): any {
        const user = window.sessionStorage.getItem(USER_KEY);
        if (user) {
            return JSON.parse(user);
        }
        return {};
    }

    public isLoggedIn(): boolean {
        const user = window.sessionStorage.getItem(USER_KEY);
        if (user) {
            return true;
        }
        return false;
    }   
}