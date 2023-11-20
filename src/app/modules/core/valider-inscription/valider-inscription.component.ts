import { Component, OnInit } from '@angular/core';
import { AuthComponent } from '../auth/auth.component';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';

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
  private tokenStatut = TokenStatus;
  private messageErreur = '';

  constructor(private authService : AuthService, private route : ActivatedRoute ){}

  ngOnInit(): void {
    this.token = this.route.snapshot.queryParamMap.get("token");
    if(this.token){
      
    }
  }


}
