import { Injectable } from "@angular/core";
import { NotificationBarComponent } from "./notification-bar.component";

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    isNotifShown?= false;
    textForNotif = "";
    //utiliser plutôt des observables pour communiquer

    public setTextNotif(text: string) {
        this.textForNotif = text;
        this.isNotifShown = true;
    }
    public showNotif() {
        this.isNotifShown = true;
    }
    public hideNotif() {
        this.isNotifShown = false;
    }
    public showNotifForXSeconds(text: string, seconds: number) {
        this.textForNotif = text;
        this.isNotifShown = true,
            setTimeout(
                () => { this.isNotifShown = true; }, seconds * 10000
            )
    };
}