import { Injectable } from "@angular/core";
import { NotificationBarComponent } from "../notification-bar/notification-bar.component";

@Injectable({
    providedIn: 'root'
})
export class NotificationServiceComponent {
    constructor(public notif : NotificationBarComponent){

    }
    afficherNotif(text : string){
        this.notif.showNotif();
        this.notif.setTextNotif(text)
    }
    afficherNotifForXseconds(text : string, seconds : number){
        this.notif.setTextNotif(text);
        this.notif.showNotifForXSeconds(seconds);
        this.notif.showNotif();
    }
    hideNotif(){
        this.notif.hideNotif();
    }
}