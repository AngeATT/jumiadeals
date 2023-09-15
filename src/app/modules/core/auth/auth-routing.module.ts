import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";

export const routes : Routes = [
    {
        path : 'dashboard',
        component : DashboardComponent,
        children : [
            {
                path : 'favoris'
            },
            {
                path : 'achats'
            },
            {
                path : 'parametres'
            }
        ]
    }
];