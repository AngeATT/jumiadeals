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

@NgModule({
    declarations:[FooterComponent,HeaderComponent,AuthComponent, RegistrationComponent, AcceuilComponent, CompteComponent, NotificationBarComponent],
    exports:[HeaderComponent,FooterComponent,AuthComponent,CoreRoutingModule],
    imports:[CommonModule, MaterialFeatures, MatIconModule, ReactiveFormsModule,HttpClientModule,FormsModule],
    providers:[AuthService,RestDataSource, NotificationService]
})
export class CoreModule{}