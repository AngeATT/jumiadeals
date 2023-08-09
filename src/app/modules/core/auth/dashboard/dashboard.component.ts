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
}
