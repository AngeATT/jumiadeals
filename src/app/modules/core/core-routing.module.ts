import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegistrationComponent } from "./registration/registration.component";
import { AuthComponent } from "./auth/auth.component";
import { AcceuilComponent } from "./acceuil/acceuil.component";

const routes : Routes = [
    {path:"", component: AcceuilComponent},
    {path:"register",component:RegistrationComponent},
    { path:"login", component:AuthComponent},
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class CoreRoutingModule{}