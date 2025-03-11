import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoggerService } from './services/logger.service';
import { ConfigService } from './shared/services/config.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TableTemplateComponent } from './shared/components/table-template/table-template.component';
import { ImportantBookingInfoComponent } from './shared/components/important-booking-info/important-booking-info.component';
import { RegistrationComponent } from './registration/registration.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [

      ],
      imports: [RouterTestingModule,
        RegistrationComponent,
        ImportantBookingInfoComponent,
        TableTemplateComponent,
        ToastrModule.forRoot(),
        AppComponent, HeaderComponent, FooterComponent],
      providers: [ConfigService, LoggerService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
