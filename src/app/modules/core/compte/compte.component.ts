import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css','../header/header.component.css']
})
export class CompteComponent {
  public diag = false;
  isUserLogged = false;
  userMoney? : number;
  favorisNumber : number = 0;

  constructor(private storageService : StorageService, private authService : AuthService){}

  ngOnInit(){
    if (this.storageService.isLoggedIn() ){
      this.isUserLogged = true;
    }
  }
  log(){
    if (this.storageService.isLoggedIn() ){
      this.isUserLogged = true;
    }else{
      this.isUserLogged = false;
    }
  }
  
  hideDiag():void{
    this.diag = false;
  }
  showDiag(){
    this.log();
    this.diag = true;
  }
  seDeconnecter(){
    this.authService.logout();
    this.storageService.clean();
    
  }
}
