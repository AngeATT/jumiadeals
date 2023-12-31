import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    private notifSource = new Subject<string>();
    notif$ = this.notifSource.asObservable();

    //send -1 to make the notif permanently visible
    private secondsToShowSource = new Subject<number>();
    seconds$ = this.secondsToShowSource.asObservable();

    private succes = new Subject<boolean>();
    succes$ = this.succes.asObservable();

    textForNotif = "";
    //utiliser plutôt des observables pour communiquer

    public showNotifForXSeconds(text: string, seconds: number, succes : boolean) {
        this.notifSource.next(text);
        this.secondsToShowSource.next(seconds);
        this.succes.next(succes);
    };
}
