import { Component } from '@angular/core';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css','../header/header.component.css']
})
export class CompteComponent {
  public diag = false;
  
  hideDiag():void{
    this.diag = false;
  }
  showDiag(){
    this.diag = true;
  }
}
