import { Component } from '@angular/core';
import { NotificationService } from './notifcation.service';

@Component({
  selector: 'app-notification-bar',
  templateUrl: './notification-bar.component.html',
  styleUrls: ['./notification-bar.component.css']
})
export class NotificationBarComponent {
  isNotifShown?: boolean;
  textForNotif?: string;
  succes?: boolean;

  constructor(private notifService: NotificationService) {

    this.notifService.notif$.subscribe(notif => { this.textForNotif = notif });
    this.notifService.succes$.subscribe(succes =>{this.succes = succes});
    this.notifService.seconds$.subscribe(seconds => {
      this.isNotifShown = true;
      if (seconds > -1) {
        setTimeout(
          () => { this.isNotifShown = false; }, 1000 * seconds
        )
      }
    })
  }
  getAlertClass() : string{
    this.notifService.succes$.subscribe(succes =>{this.succes = succes});
    return this.succes ? "success" : "echec";
  }
}
