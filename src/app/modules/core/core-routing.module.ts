import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegistrationComponent } from "./registration/registration.component";
import { AuthComponent } from "./auth/auth.component";
import { AcceuilComponent } from "./acceuil/acceuil.component";
import { DashboardComponent } from "./compte/dashboard/dashboard.component";
import { CreerAnnonceComponent } from "./creer-annonce/creer-annonce.component";

const routes : Routes = [
    {path:"", component: AcceuilComponent,},

    {path:"register",
    component:RegistrationComponent},
    { path:"login",
    component:AuthComponent
    },
    {
      path: "creer-annonce",
      component: CreerAnnonceComponent
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class CoreRoutingModule{}
