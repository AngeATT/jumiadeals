import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {
    
  }

  name?: string;
  dateInscritpion?: string;
  credit?: number;
  nombreAnnonces?: number;
  nombreFavoris?: number;
  menuActif = 1;

  idFenetreActive() {

  }
  setMenuActif(num: number) {
    this.menuActif = num;
  }

  getClassButton(): Object {
    return {
      "menuButton": true,
    }
  }
}

