import { Component } from '@angular/core';

@Component({
  selector: 'app-notification-bar',
  templateUrl: './notification-bar.component.html',
  styleUrls: ['./notification-bar.component.css']
})
export class NotificationBarComponent {
  isNotifShown?= false;
  textForNotif = "";

  public setTextNotif(text: string) {
    this.textForNotif = text;
  }
  public showNotif() {
    this.isNotifShown = true;
  }
  public hideNotif(){
    this.isNotifShown = false;
  }
  public showNotifForXSeconds(seconds : number){
    this.isNotifShown = true,
    setTimeout(
      ()=> {this.isNotifShown = false; },seconds*1000
    )
  };
}
