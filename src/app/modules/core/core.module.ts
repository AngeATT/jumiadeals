import { NgModule } from "@angular/core";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { MaterialFeatures } from "./header/material-features.component";
import { MatIcon, MatIconModule } from "@angular/material/icon";
import { AuthService } from "./services/auth.service";
import { AuthComponent } from "./auth/auth.component";
import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RestDataSource } from "./datasources/spring.rest.source";
import { RegistrationComponent } from './registration/registration.component';
import { CoreRoutingModule } from "./core-routing.module";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { AcceuilComponent } from './acceuil/acceuil.component';
import { CompteComponent } from './compte/compte.component';
import { NotificationBarComponent } from './notification-bar/notification-bar.component';
import { NotificationService } from "./notification-bar/notifcation.service";
import { DashboardComponent } from './compte/dashboard/dashboard.component';
import { AnnoncesComponent } from './compte/dashboard/annonces/annonces.component';
import { FavorisComponent } from './compte/dashboard/favoris/favoris.component';
import { AchatsComponent } from './compte/dashboard/achats/achats.component';
import { ParametresComponent } from './compte/dashboard/parametres/parametres.component';
import { DashBoardRoutingModule } from "./compte/dashboard/dashboard-routing.module";

@NgModule({
    declarations:[FooterComponent,HeaderComponent,AuthComponent, RegistrationComponent, AcceuilComponent, CompteComponent, NotificationBarComponent, DashboardComponent, AnnoncesComponent, FavorisComponent, AchatsComponent, ParametresComponent],
    exports:[HeaderComponent,FooterComponent,AuthComponent,CoreRoutingModule],
    imports:[CommonModule, MaterialFeatures, MatIconModule, ReactiveFormsModule,HttpClientModule,FormsModule,CoreRoutingModule,
    DashBoardRoutingModule],
    providers:[AuthService,RestDataSource, NotificationService]
})
export class CoreModule{}