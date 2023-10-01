import { Component, Inject, Injectable, NgModule } from "@angular/core";
import { CanActivate, RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { AnnoncesComponent } from "./annonces/annonces.component";
import { FavorisComponent } from "./favoris/favoris.component";
import { ParametresComponent } from "./parametres/parametres.component";
import { AchatsComponent } from "./achats/achats.component";
import { StorageService } from "../../services/storage.service";


@Injectable({providedIn: 'root'})
export class LoggedInGuard implements CanActivate {
  constructor(private loginService: StorageService) {}
  canActivate() {
    return this.loginService.isLoggedIn();
  }
}

const routes: Routes = [
    {
     path: 'dashboard',
     component: DashboardComponent,
     canActivate : [LoggedInGuard],
     children : [
        {
            path :'',
            component :AnnoncesComponent,

        },
        {  
            path : 'annonces',
            component : AnnoncesComponent
        },
        {
            path : 'achats',
            component: AchatsComponent
        },
        {
            path : 'favoris',
            component : FavorisComponent
        },
        {
            path: 'parametres',
            component: ParametresComponent
        },
        {
            path : '**',
            component : AnnoncesComponent
        },
     ]
    }
    
]

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports: []
})
export class DashBoardRoutingModule{}



