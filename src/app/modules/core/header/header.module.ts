import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { MaterialFeatures } from './material-features.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [HeaderComponent],
    exports: [HeaderComponent],
    imports: [MaterialFeatures,MatIconModule]
})
export class HeaderModule { }