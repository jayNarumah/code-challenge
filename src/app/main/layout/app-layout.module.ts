import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppLayoutComponent } from './app-layout.component';
import { CommonModule } from "@angular/common";
import { PrimeNgUiModule } from "src/app/primeng-ui/primeng-ui.module";
import { SideNabComponent } from "./components/side-nab/side-nab.component";

@NgModule({
  imports: [CommonModule, RouterModule, PrimeNgUiModule],
  declarations: [
    AppLayoutComponent,
    SideNabComponent
  ],
  providers: []
})
export class AppLayoutModule { }
