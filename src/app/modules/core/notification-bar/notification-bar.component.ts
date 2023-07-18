import { Component } from '@angular/core';
import { NotificationService } from './notifcation.service';

@Component({
  selector: 'app-notification-bar',
  templateUrl: './notification-bar.component.html',
  styleUrls: ['./notification-bar.component.css']
})
export class NotificationBarComponent {
  isNotifShown?= this.notifService.isNotifShown;
  textForNotif = this.notifService.textForNotif;

  constructor( private notifService :NotificationService ){}

}
