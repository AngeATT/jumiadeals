import { Component } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css','../shared/compteCSS.css']
})
export class AcceuilComponent {
  villes: String[] = ["Abidjan", "Bouake", "Daloa", "Korogho", "San-pedro", "Yamoussoukro"];
  likes?: number;

  
}
