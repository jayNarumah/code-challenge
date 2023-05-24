import { NgModule } from "@angular/core";
import { ManageItemsComponent } from "./pages/manage-items/manage-items.component";
import { ManageSalesComponent } from "./pages/manage-sales/manage-sales.component";
import { CommonModule } from "@angular/common";
import { PrimeNgUiModule } from "../primeng-ui/primeng-ui.module";
import { RouterModule, Routes } from "@angular/router";
import { AppLayoutComponent } from "./layout/app-layout.component";
import { FormsModule } from "@angular/forms";
import { MessageService } from "primeng/api";
import { SideNabComponent } from "./layout/components/side-nab/side-nab.component";
const routes: Routes = [
    {
        path: '',
        component: AppLayoutComponent,
        children: [
            {
                path: '',
                component: ManageItemsComponent
            },
            {
                path: 'sales',
                component: ManageSalesComponent
            }
        ]
    }
]
@NgModule({
    declarations: [ManageItemsComponent, ManageSalesComponent],
    imports: [CommonModule, PrimeNgUiModule, RouterModule.forChild(routes), FormsModule],
    providers: [MessageService]
})

export class MainModules { }