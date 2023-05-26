import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AppComponent } from './app.component';
import { PrimeNgUiModule } from './primeng-ui/primeng-ui.module';
import { AppLayoutModule } from './main/layout/app-layout.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./main/main.module').then(m => m.MainModules),
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
        FormsModule,
        PrimeNgUiModule,
        AppLayoutModule
    ],
    providers: [ConfirmationService, MessageService],
    bootstrap: [AppComponent]
})
export class AppModule { }
