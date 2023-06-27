import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public diag = false;
  
  hideDiag():void{
    this.diag = false;
  }
  showDiag(){
    this.diag = true;
  }
}
