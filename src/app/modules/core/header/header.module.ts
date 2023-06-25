import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { MaterialFeatures } from './material-features.component';

@NgModule({
    declarations: [HeaderComponent],
    exports: [HeaderComponent],
    imports: [MaterialFeatures]
})
export class HeaderModule { }