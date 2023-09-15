import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  name?: string;
  dateInscritpion?: string;
  credit?: number;
  nombreAnnonces? : number;
  nombreFavoris?:number;
  menuActif = 1;
  
  idFenetreActive(){

  }
  setMenuActif(num : number){
    this.menuActif = num;
  }

  getClassButton(key : number ) : Object {
    return {
      "menuButton" : true,
      "onFocusMenu" : this.menuActif == key
    }
  }



}

