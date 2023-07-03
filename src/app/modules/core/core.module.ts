import { NgModule } from "@angular/core";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { MaterialFeatures } from "./header/material-features.component";
import { MatIcon, MatIconModule } from "@angular/material/icon";
import { AuthService } from "./services/auth.service";
import { AuthComponent } from "./auth/auth.component";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RestDataSource } from "./datasources/spring.rest.source";

@NgModule({
    declarations:[FooterComponent,HeaderComponent,AuthComponent],
    exports:[FooterComponent,HeaderComponent,AuthComponent],
    imports:[CommonModule, MaterialFeatures, MatIconModule, ReactiveFormsModule],
    providers:[AuthService,RestDataSource]
})
export class CoreModule{}