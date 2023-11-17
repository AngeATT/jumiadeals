import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { authGuard } from "../../auth/auth.guard";
import { AchatsComponent } from "./achats/achats.component";
import { AnnoncesComponent } from "./annonces/annonces.component";
import { DashboardComponent } from "./dashboard.component";
import { FavorisComponent } from "./favoris/favoris.component";
import { ParametresComponent } from "./parametres/parametres.component";


const routes: Routes = [
    {
     path: 'dashboard',
     component: DashboardComponent,
     canActivate : [authGuard],
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
    exports: [],

})
export class DashBoardRoutingModule{}



