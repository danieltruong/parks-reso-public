import { enableProdMode, importProvidersFrom, inject, provideAppInitializer } from '@angular/core';

import { environment } from './environments/environment';
import { ApiService } from './app/services/api.service';
import { ConfigService } from './app/shared/services/config.service';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { EventService } from './app/services/event.service';
import { FacilityService } from './app/services/facility.service';
import { FaqService } from './app/services/faq.service';
import { LoggerService } from './app/services/logger.service';
import { PassService } from './app/services/pass.service';
import { ParksListResolverService } from './app/parks-list/parks-list-resolver.service';
import { InjectComponentService } from './app/shared/services/inject-component.service';
import { ParkService } from './app/services/park.service';
import { ToastService } from './app/services/toast.service';
import { FacilitiesResolverService } from './app/registration/facilities-resolver.service';

if (environment.production) {
  enableProdMode();
}

function initConfig(
  configService: ConfigService,
  apiService: ApiService,
) {
  return async () => {
    await configService.init();
    apiService.init();
  };
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      CommonModule,
      AppRoutingModule,
      ToastrModule.forRoot({
        positionClass: 'toast-top-center'
      }),
      ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: environment.production,
        // Register the ServiceWorker as soon as the application is stable
        // or after 30 seconds (whichever comes first).
        registrationStrategy: 'registerWhenStable:30000'
      }),
    ),
    provideAppInitializer(() => {
      const initializerFn = (initConfig)(inject(ConfigService), inject(ApiService));
      return initializerFn();
    }),
    ConfigService,
    EventService,
    FacilityService,
    FaqService,
    LoggerService,
    PassService,
    ParksListResolverService,
    InjectComponentService,
    ParkService,
    ToastService,
    FacilitiesResolverService,
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),
  ]
})
  .catch(err => console.error(err));

