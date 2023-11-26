import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../notification-bar/notifcation.service';
import { AuthService } from '../services/auth.service';

enum TokenStatus {
  VALID = 'VALID',
  INVALID ='INVALID',
  EXPIRED = "EXPIRED",
  SENDING = "SENDING",
  SENT = "SENT"
}

@Component({
  selector: 'app-valider-inscription',
  templateUrl: './valider-inscription.component.html',
  styleUrls: ['./valider-inscription.component.css']
})
export class ValiderInscriptionComponent implements OnInit{

  private token : string | null = '';
  tokenStatut! : TokenStatus;
  TokenEnum = TokenStatus;
  private messageErreur = '';

  constructor(private authService : AuthService, private route : ActivatedRoute, private notif : NotificationService ){}

  ngOnInit(): void {
    this.token = this.route.snapshot.queryParamMap.get("token");
    if(this.token){
      this.authService.verifyToken(this.token).subscribe({
        next : (data) =>{
          this.tokenStatut = data as TokenStatus;
        },
        error : (e)=>{
          this.messageErreur = e.error.message;
          this.tokenStatut = TokenStatus.INVALID;
        }
      });
    }
  }
  renvoyerToken(){
    this.tokenStatut = TokenStatus.SENDING;
    this.authService.resendToken(this.token!).subscribe({
      error : (e)=>{
        this.messageErreur = e.error.message;
      },
      complete : () =>{
        this.tokenStatut = TokenStatus.SENT;
      }
    });
  }
}
