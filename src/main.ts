import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

if (environment.production) {
    // Production mode is handled automatically in Angular 20
}

bootstrapApplication(AppComponent, {
    providers: [
        provideAnimations(),
        provideHttpClient()
    ]
}).catch(err => console.error(err));
