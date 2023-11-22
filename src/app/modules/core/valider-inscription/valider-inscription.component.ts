import { Component, OnInit } from '@angular/core';
import { AuthComponent } from '../auth/auth.component';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../notification-bar/notifcation.service';

enum TokenStatus {
  VALID,
  INVALID,
  EXPIRED,
  SENDING,
  SENT
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
          this.tokenStatut = data.message as TokenStatus;
        },
        error : (e)=>{
          this.messageErreur = e.error.message;
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
