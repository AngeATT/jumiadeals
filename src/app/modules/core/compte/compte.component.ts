import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css','../header/header.component.css']
})
export class CompteComponent {
  public diag = false;
  isUserLogged = false;

  constructor(private storageService : StorageService){}

  ngOnInit(){
    if (this.storageService.isLoggedIn() ){
      this.isUserLogged = true;
    }
  }
  
  hideDiag():void{
    this.diag = false;
  }
  showDiag(){
    this.diag = true;
  }
}
