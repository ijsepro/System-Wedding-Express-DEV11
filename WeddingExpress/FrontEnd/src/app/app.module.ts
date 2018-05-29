import { VendorSignupService } from './services/vendor-signup.service';
import { HomeComponent } from './login/home/home.component';
import { UserdetailService } from './services/userdetail.service';
import { LogInServiceService } from './services/login.service.service';
import { ApponimentService } from './services/apponiment.service';
import { AppErrorHandler } from './common/app-error-handler';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule } from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatDialogModule, MatCardModule, MatDatepickerModule, MatFormFieldModule, MatInputModule , MatNativeDateModule} from '@angular/material';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserComponent } from './candidate/user/user.component';
// import { HomeComponent } from './home/home.component';
// import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SignupServiceService } from './services/signup-service.service';
import { VendorServiceService } from './services/vendor.service';
import { DashboardComponent } from './candidate/dashboard/dashboard.component';
import { UserDashboardComponent } from './candidate/user-dashboard/user-dashboard.component';
import { BudgetCalculatorComponent } from './candidate/budget-calculator/budget-calculator.component';
import { VendorDashboardComponent } from './business/vendor-dashboard/vendor-dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { AppoinmentComponent } from './candidate/appoinment/appoinment.component';
import { VendorLoginComponent } from './business/vendor-login/vendor-login.component';

import {MatTableModule} from '@angular/material/table';
import { AccSettingsComponent } from './candidate/acc-settings/acc-settings.component';
import { DeleteAccComponent } from './candidate/delete-acc/delete-acc.component';

import { AgmCoreModule } from '@agm/core';
import { VendorSignupComponent } from './business/vendor-signup/vendor-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UserComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    UserDashboardComponent,
    BudgetCalculatorComponent,
    VendorDashboardComponent,
    FooterComponent,
    AppoinmentComponent,
    VendorLoginComponent,
    AccSettingsComponent,
    DeleteAccComponent,
    VendorSignupComponent

  ],
  exports: [ MatTableModule , MatButtonModule, MatDialogModule ],
  entryComponents: [
    AppoinmentComponent,
    AccSettingsComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDz3cM9XMBuNHJW6IJYFRr2HY_c8OmSi2Y&callback=initMap'
    }),
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'user', component: UserComponent},
      {path: 'login', component: LoginComponent},
      {path: 'signup', component: SignupComponent},
      {path: 'user-dashboard', component: UserDashboardComponent},
      {path: 'budget-cal', component: BudgetCalculatorComponent},
      {path: 'vendor-login', component: VendorLoginComponent},
      {path: 'vendor-dashboard', component: VendorDashboardComponent},
      {path: 'vendor-signup' ,component:VendorSignupComponent},
      {path: 'acc-settings', component: AccSettingsComponent},
      {path: 'acc', component: DeleteAccComponent},
      

    ]),
    
    NgbModule.forRoot(),
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule, MatButtonModule, MatDialogModule, MatCardModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule,
    MatInputModule 
  ],
  providers: [
    SignupServiceService,
    LogInServiceService,
    UserdetailService,
    ApponimentService,
    VendorServiceService,
    VendorSignupService,
    { provide: ApponimentService, useClass: ApponimentService},
    { provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
