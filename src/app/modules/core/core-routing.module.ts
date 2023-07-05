import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegistrationComponent } from "./registration/registration.component";
import { AuthComponent } from "./auth/auth.component";

const routes : Routes = [
    {path:"register",component:RegistrationComponent},
    { path:"auth", component:AuthComponent},
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class CoreRoutingModule{}