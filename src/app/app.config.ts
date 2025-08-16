import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { CarouselModule } from 'ngx-bootstrap/carousel';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(CarouselModule.forRoot()),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};
